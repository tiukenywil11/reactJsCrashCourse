// Importing a hook called useState to be able to use states
// Importing a hook called useEffect, to deal with side effect (e.g. after a page loads)
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { AddTask } from './components/AddTask';

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
  /*    
  --  Transfer the contents of tasks to db.json (mock backend server)
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
  */
  ])

  useEffect(() => {
    // Replace fethTasks function to getTasks for async purpose
    const getTasks = async () => {
      // Assigns data returned by fetchTasks function 
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    // Calls get tasks function
    getTasks()
  // Add a dependency array, if nothing is needed, pass an empty array
  }, [])


  // Removed function from useEffect to use separately
  // Create a function that fetches data from backend server
  const fetchTasks = async () => {
    // Waits for data to be fetched from link provided
    const res = await fetch('http://localhost:5000/tasks')
    // Converts data gathered to json format
    const data = await res.json()

    return data
  }


  // Create a function to delete a Task
  // Pass to a property named onDelete
  const deleteTask = async (id) => {
    //console.log('delete', id)

    // Fetch and delete json object from a server
    await fetch(
      `http://localhost:5000/tasks/${id}`,
      {method: 'DELETE'}
    )

    // Using higher order function filter() to remove UI elements using ID
    // If id passed to function is not in the list of tasks, then return a new array without the id passed to the function
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // Create a function to toggle reminder
  const toggleReminder = (id) => {
    //console.log(id);

    // Using higher order function map(), if the task id is equal to id, then set and object, else it will have no change
    setTasks(tasks.map(
      (task) => task.id === id ? 
      // '...task' is all of the properties and values of tasks, but change the reminder property to the opposite (true or false)
      {...task, reminder: ! task.reminder } 
      // Else there would be no change, thus assign the same 'task' object
      : task
      )
    )
  }

  // Create a function to add task
  const addTask = async (task) => {
    //console.log(task);

    // Create a response that sends to target API endpoint, then adds headers, then parse task to JSON
    const res = await fetch(
      'http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    )

    // Creates a variable which gets the string format of JSON sent, data returned is only the new task added
    const data = await res.json()

    // Create a new array calling the current tasks, and adding the data returned
    setTasks([...tasks, data])

    /*
    -- Removed because tasks should now be added to db.json instead
    -- Uses math function to create a random id 
    const id = Math.floor(Math.random() * 10000) + 1;

    -- Add the randomly generated id, and add the properties and value of the passed task
    const newTask = { id, ...task }

    -- Create a new array calling the current tasks, and adding the newTask created
    setTasks([...tasks, newTask])
    */
  }

  // Create a state for Add button, to toggle form visibility
  const [showAddTask, setShowAddTask] = useState(false);

  // Using ternary operator on Tasks elements, if task is empty, show nothing
  // Using && on AddTask component is a shorter ternary which shows visibility of form based on value of 'showAddTask' state.
  return (
    <div className="container">

      <Header 
        title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}
      />

      {showAddTask &&
        <AddTask
          onAdd={addTask}
        />
      }
      
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