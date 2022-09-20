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
    <p>
      Number of exercises {
        props.exercise[0]+props.exercise[1]+props.exercise[2]
      }
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises : 14
  }

  const part = [part1.name, part2.name, part3.name]
  const exercise = [part1.exercises, part2.exercises, part2.exercises]

  return (
    <div>
      <Header course={course}/>
      <Content part={part} exercise={exercise}/>
      <Total exercise={exercise}/>
    </div>
  )
}

export default App