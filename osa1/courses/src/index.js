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

  const Part = (props) => {
    return (
      <div>
        <p> {props.part} {props.exercises}</p>
      </div>
    )
  }
  const Contents = (props) => {
    return (
      <>
     <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
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
      <Contents />
      <Total amount={exercises1+exercises2+exercises3}/> 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
