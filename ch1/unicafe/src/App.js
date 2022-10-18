import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
};

const Average = (props) => {
  let avg = (props.good * 1 + props.bad * (-1) + props.neutral * 0) /
  (props.total)
  return (
    avg.toString()
  )
};

const Percentage = (props) => {
  let pct = props.good / props.total * 100
  return (
    pct.toString() + " %"
  )
};
const StatisticsLine= (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> : {props.value} </td>
    </tr>
  )
}
const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral =  props.neutral

  let total = good + bad + neutral

  const avg = <Average good={good} bad={bad}
    neutral={neutral} total={total}/>
  const pct = <Percentage good={good} bad={bad}
    neutral={neutral} total={total}/>

  if (total == 0){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  };

  return(
    <table>
      <tbody>
        <h2>Statistics</h2>
        <StatisticsLine text={"Good"} value={good}/>
        <StatisticsLine text={"Bad"} value={bad}/>
        <StatisticsLine text={"Neutral"} value={neutral}/>
        <StatisticsLine text={"Total"} value={total}/>
        <StatisticsLine text={"Average"} value={avg}/>
        <StatisticsLine text={"Positive"} value={pct}/>
      </tbody>
    </table>
  )
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1);
  };

  const handleNeutral = () => {
    setNeutral(neutral+1);
  };

  const handleBad = () => {
    setBad(bad+1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      c
      <Button clickHandler={()=> handleNeutral()} text="Neutral"/>
      <Button clickHandler={()=> handleBad()} text="Bad"/>

      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App