import {useState} from 'react'
import './App.css';
import SingleTodo, { LoopArr } from './components/SingleTodo';

function App() {
 const [arr,setArr]=useState([])
 const addValue = (value)=>{
  
  setArr([...arr.concat(value)])
 }

 const RemoveTodo = ( value) => {
  const newArr=arr.filter((i,index)=>{
    return index !== value
  })
  setArr([...newArr])
 }
  return (
    <div className="App">
      <header className="App-header">
       <SingleTodo addArr={addValue}/>
       {arr.map((i,ind)=>{return <LoopArr value={i} RemoveTodo={RemoveTodo} index={ind}/>})}
      </header>
    </div>
  );
}

export default App;
