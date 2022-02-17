function App() {
  const name = 'Brad';
  const x = false;

  return (
    <div className="container">
      <h1> Hello from React</h1>
      <h2> Hello {name}</h2>
      <h2> 1 + 1 = {1 + 1}</h2>
      <h2> is 'x' true? (ternary) {x ? 'Yes' : 'No'} </h2>
    </div>
  );
}

export default App;