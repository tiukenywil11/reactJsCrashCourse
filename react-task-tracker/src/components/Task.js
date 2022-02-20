// Importing Font Awesome icons
import { FaTimes } from 'react-icons/fa'

// This comppnent would be used on Tasks, to modularize the design per list item
// Pass a function before calling onDelete to pass a parameter
export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className='task'  
      onDoubleClick={() => onToggle(task.id)}
    >
        <h3>
            {task.text}
            <FaTimes 
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task