import Header from './components/Header';

function App() {
  const name = 'Brad';
  const x = false;

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <h1> Hello from React</h1>
      <h2> Hello {name}</h2>
      <h2> 1 + 1 = {1 + 1}</h2>
      <h2> is 'x' true? (ternary) {x ? 'Yes' : 'No'} </h2>
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