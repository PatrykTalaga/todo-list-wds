import { useState } from 'react'
import './App.css'
import InputTask from './InputTask'

function App() {

  const [toDoList, setToDoList] = useState([])

  function addTask(input){
    setToDoList([...toDoList, input])
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
      <InputTask submit={addTask} />
      <div>
        <ul>
          {toDoList.map((toDo) => (
            
            <li key={toDo.id}>
                  <input type='checkbox' checked={toDo.status}
                   onChange={()=>handleCheckbox(toDo.id)}>
                  </input>
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


