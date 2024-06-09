const Courses = ({ courses }) => {

    const header = (courses, index) => {
  
      let courseHeader = courses.map(course => course.name)
      console.log("courseHeader", courseHeader)
  
      return(
        <h1>
          {courseHeader[index]}
        </h1>
      )
    }
  
    const parts = (courses, index) => {
  
      console.log("parts", courses[index].parts)
  
      let part = courses[index].parts.map((part, i) => (
        <div key={i}>
          <p>{part.name} {part.exercises}</p>
        </div>
      ))
  
      console.log("part", part)
  
      return(
        part
      )
    }
  
    const sum = (courses, index) => {
  
      let partExercise = courses[index].parts.map((part) => {
        let sumOfExercise = part.exercises
        return sumOfExercise
      })
  
      console.log("partExercise", partExercise)
  
      const total = partExercise.reduce((sum, partExercise) => {
        return (sum + partExercise)}, 0)
  
      console.log("Sum: ", total)
  
      return(
        <p>
          The sum of the courses is: {total}
        </p>
      )
    }
  
  
    return (
      <div>
        <>{header(courses, 0)}</>
        <>{parts(courses, 0)}</>
        <>{sum(courses, 0)}</>
        <>{header(courses, 1)}</>
        <>{parts(courses, 1)}</>
        <>{sum(courses, 1)}</>
      </div>
    )
  }

export default Courses