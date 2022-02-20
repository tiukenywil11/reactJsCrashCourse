// Import a state for AddTask form
import { useState } from 'react'

export const AddTask = () => {

    // Adding variables and states for each input
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')

    // Adding the property 'onChange' inside 'input' tag, to get the value in text box/ checkbox
    // 'e.target.value' gets text from textbox (String), 'e.currentTarget.checked' gets value from checkbox (boolean)
    return (
    <form className='add-form'>
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
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
    )
}

export default AddTask
