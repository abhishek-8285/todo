import React,{useState} from 'react'

function SingleTodo({addArr}) {
    const [value,setValue]=useState("")
    const valueHandler = (e) => {
        setValue(e.target.value)
    }
    const submitHandler = () => {
        if(!value){
            return
        }
        addArr(value)
        setValue("")
    }

  return (
    <div className='todo-entry'>
    <input type='text' placeholder='enter your work' value={value} onChange={valueHandler}/> {"      "}
    <button onClick={submitHandler}>'➕'</button>
    </div>
  )
}  


export function LoopArr({value , index, RemoveTodo}){
    const [checkValue,setCheckValue]=useState(false)
    const checkBoxHandle = () => {
        setCheckValue(!checkValue)
    }
return(
    <div>
        <input type='checkbox' value={checkValue} onClick={checkBoxHandle}/>
        <span>{value}</span>
        <button>update</button>
        <button onClick={()=>{RemoveTodo(index)}}>delete</button>
    </div>
)
}

export default SingleTodo
