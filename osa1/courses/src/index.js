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
    const t = props.parts
    
    return(
      <>
      <p>Total {t[0].exercises+t[1].exercises+t[2].exercises} exercises</p>
      </>
    )
  }
  const Contents = (props) => {
    const t = props.parts
    return(
      <>
      <Part part={t[0].name} exercises={t[0].exercises}/>
      <Part part={t[1].name} exercises={t[1].exercises}/>
      <Part part={t[2].name} exercises={t[2].exercises}/>
      </>
    )
  }

  
  const App = () => {
    const course = {
      name: 'Superadvanced web and mobile programming',
      parts: [
        {
          name: 'Basics of React',
          exercises: 8
        },
        {
          name: 'Using props',
          exercises: 10
        },
        {
          name: 'Component states',
          exercises: 12
        }
      ]
    }
  
    return (
      <div>
        <Header course={course.name} />
        <Contents parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
