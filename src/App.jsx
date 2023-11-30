import { useState } from 'react'
import './App.css'
import InputTask from './InputTask'
import ToDoList from './ToDoList'

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
        <ToDoList toDoList={toDoList} deleteTask={deleteTask} handleCheckbox={handleCheckbox} />
      </div>
    </>
  )
}

export default App


