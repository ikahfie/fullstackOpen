import { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
};

const Line =  ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const MaxVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max( ...votes )
  const indexMostVotes = votes.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <div>
        <p>No votes given.</p>
      </div>
    )
  }

  return (
    <Line text={anecdotes[indexMostVotes]} votes={maxVotes} />
  )
}

const Anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(Anecdotes.length).fill(0))

  const handleSelected = () => {
    const random = Math.floor(Math.random() * Anecdotes.length)
    setSelected(random)
    console.log(random)
  }
  const handleVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Line text={Anecdotes[selected]} votes={votes[selected]} />
      <Button clickHandler={handleVotes} text='vote' />
      <Button clickHandler={handleSelected} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <MaxVoted anecdotes={Anecdotes} votes={votes} />
    </div>
  )
}

export default App;