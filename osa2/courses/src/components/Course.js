import React from "react"


const  Course = ({course}) => {
    return(
        <>
        <Header course={course.name} ></Header>
        <Contents parts={course.parts}></Contents>
        <Total parts={course.parts} ></Total>
        </>
    )
}
const Header = (props) => {
    return (
      <>
      <h1>{props.course}</h1>
      </>
    )
  }

  const Part = ({part}) => {
    return (
      <div>
        <p> {part.name} {part.exercises}</p>
      </div>
    )
  }
  

  const Total = ({parts}) => {
    
   const summa = parts.map(x => x.exercises);
   console.log(summa)
    return(
      <>
      <p>Total amount of exercises: {summa.reduce((x,y) => x+y)}</p>
      </>
    )
  }
  const Contents = ({parts}) => {
    
    return(
      <>
      {parts.map(part => <Part key={part.id} part={part}/>)}
      </>
    )
  }

  export default Course