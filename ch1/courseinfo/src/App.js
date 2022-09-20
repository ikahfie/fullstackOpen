const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part[0]} exercises={props.exercise[0]} />
      <Part part={props.part[1]} exercises={props.exercise[1]} />
      <Part part={props.part[2]} exercises={props.exercise[2]} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.total} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const part = [part1, part2, part3]
  const exercise = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content part={part} exercise={exercise}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App