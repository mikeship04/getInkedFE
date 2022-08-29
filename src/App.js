import './App.css';

function App() {
  fetch('http://localhost:4000/hello')
  .then((res) => res.json())
  .then(console.log)
  
  return (
    <div className="App">
      Welcome to getInked!
    </div>
  );
}

export default App;
