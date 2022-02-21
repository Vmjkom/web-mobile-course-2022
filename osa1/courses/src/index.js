import React from 'react'
import ReactDOM from 'react-dom'



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
  

  const Total = (props) => {
    return(
      <>
      <p>Total {props.amount} exercises</p>
      </>
    )
  }

  
const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }
  const Contents = (props) => {
    return (
      <>
     <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </>
    )
    
  }

  return (
    <div>
      <Header course={course}/>
      <Contents/>
      <Total amount={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
