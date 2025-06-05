import './App.css';

function App() {
  return (
    <div className="App">
     <h1>HELLO</h1>
     <Job position="Senior SDE" salary={90000} company="Amazon" />
    </div>
  );
}

const Job=(props)=>{
  return(
    <div>
      <h1>{props.position}</h1>
      <h2>{props.salary}</h2>
      <h2>{props.company}</h2>
    </div>
  );
};

export default App;
