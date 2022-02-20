// Importing a hook called useState to be able to use states
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  /*
  -- These will work
    const name = 'Brad';
    const x = false;

    return (
      <h1> Hello from React</h1>
      <h2> Hello {name}</h2>
      <h2> 1 + 1 = {1 + 1}</h2>
      <h2> is 'x' true? (ternary) {x ? 'Yes' : 'No'} </h2>
      <button className='btn'> Add </button>
    )
  */

  //Adding states to the array, 'setTasks' is a function to update the states
  // States are immutable, and cannot be directly changed (e.g. cannot use tasks.push())
  // To be able to change the state, call setTasks([...tasks], {})
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 4th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      }
  ])

  // Create a function to delete a Task
  // Pass to a property named onDelete
  const deleteTask = (id) => {
    //console.log('delete', id)

    // Using higher order function filter() to remove UI elements using ID
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // Create a function to toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
  }

  // Using ternary operator on Tasks elements, if task is empty, show nothing
  return (
    <div className="container">

      <Header title='Task Tracker'/>
      
      {tasks.length > 0 ? 
      (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />) : 
      ' No tasks to show '}
      
    </div>
  );
}

/* 
-- Example of class based function
import React from 'react'

class App extends React.Component {
  render() {
    return <h1> Hello from a class </h1>
  }
}
*/

export default App;