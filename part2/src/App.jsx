const Course = ({course}) =>{

  let parts = course.parts.map((course, i) => (
    <div key={i}>
      <p>{course.name} {course.exercises}</p>
    </div>
  ))


  let sum = course.parts.reduce((sum, course) => {
    return sum + course.exercises
  }, 0)

  //Renaming my commit to be in line with the exercises.

  return(
    <div>
      <h1>{course.name}</h1>
      <>{parts}</>
      <p>The total number of exercise: {sum}</p>
    </div>
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of Play',
        exercises: 8,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App