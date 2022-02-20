// This comppnent would be used on Tasks, to modularize the design per list item
export const Task = ({ task }) => {
  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task