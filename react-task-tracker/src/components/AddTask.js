// Import a state for AddTask form
import { useState } from 'react'

// onAdd has the function addTask from App.js
export const AddTask = ({ onAdd }) => {

    // Adding variables and states for each input
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        // if text is empty, trigger alert
        if (!text) {
            alert('Please add text')
            return
        }

        // Calls onAdd function om App.js
        onAdd ({text, day, reminder})

        // Clears the form after submit
        setText('')
        setDay('')
        setReminder(false)
    }

    // Adding the property 'onChange' inside 'input' tag, to get the value in text box/ checkbox
    // 'e.target.value' gets text from textbox (String), 'e.currentTarget.checked' gets value from checkbox (boolean)
    // the 'checked' property in reminder checkbox is set to reminder, to make the UI unchecked relative to the variable 'reminder'
    return (
    <form className='add-form' onSubmit={onSubmit}>
        
        <div className='form-control'>
            <label>Task</label>
            <input 
                type='text' 
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input 
                type='text' 
                placeholder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input 
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input 
            type='submit' 
            value='Save Task' 
            className='btn btn-block'
        />
    </form>
    )
}

export default AddTask
