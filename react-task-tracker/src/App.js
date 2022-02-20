// Importing a hook called useState to be able to use states
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const name = 'Brad';
  const x = false;
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

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks}/>
      <h1> Hello from React</h1>
      <h2> Hello {name}</h2>
      <h2> 1 + 1 = {1 + 1}</h2>
      <h2> is 'x' true? (ternary) {x ? 'Yes' : 'No'} </h2>
      <button className='btn'> Add </button>
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