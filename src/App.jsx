import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState({ task:"", id: crypto.randomUUID(), status: false })
  const [toDoList, setToDoList] = useState([])

  function submitToDo(e){
    e.preventDefault()
    if(input.task === "") return
    setToDoList([...toDoList, input])
    setInput({ task:"", id: crypto.randomUUID(), status: false })
  }

  function deleteTask(id){
    const newToDOList = toDoList.filter((toDo) => toDo.id != id)
    setToDoList(newToDOList)
  }

  function handleCheckbox(id){
    const newToDOList = toDoList.filter((toDo) => {
      if (toDo.id == id) {
        toDo.status = !toDo.status
        return toDo
      } else {
        return toDo
      }
    })
    setToDoList(newToDOList)
  }

  return (
    <>
      <form onSubmit={submitToDo}>
        <label>ToDo List</label><br></br>
        <input type='text' value={input.task} onChange={e => setInput({...input, task: e.target.value})}></input>
        <button type='submit'>+</button>
      </form>
      <div>
        <ul>
          {toDoList.map((toDo) => (
            
            <li key={toDo.id}>
                  <input type='checkbox' checked={toDo.status} onChange={()=>handleCheckbox(toDo.id)}></input>
                  <label>{toDo.task}</label>
                  <button onClick={()=>deleteTask(toDo.id)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App


