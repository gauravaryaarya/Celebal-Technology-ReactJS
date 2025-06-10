import './App.css';

function App() {
  return (
    <div className="App">
     <form onSubmit={validate()}>
      <label htmlFor='name'>Name: </label>
      <input name='name' type='text'></input>
      <input type='submit'></input>
     </form>
    </div>
  );
}

const validate=(props)=>{
  return{
    if(name=""){
      alert('Enter Name');
    } 
  }
}
export default App;
