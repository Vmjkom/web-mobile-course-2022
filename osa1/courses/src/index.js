import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  const Header = (props) => {
    return (
      <>
      <h1>{props.course}</h1>
      </>
    )
  }
  const Contents = (props) => {
    return (
      <>
    <p>{props.part1} {props.exercise1}</p>
    <p>{props.part2} {props.exercise2}</p>
    <p>{props.part3} {props.exercise3}</p>
    </>
    )
    
  }

  const Total = (props) => {
    return(
      <>
      <p>Total {props.amount} exercises</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course}></Header>
      <Contents part1={part1} exercise1={exercises1}
                part2={part2} exercise2={exercises2}
                part3={part3} exercise3={exercises3} />
      <Total amount={exercises1+exercises2+exercises3}/> 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
