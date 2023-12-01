import { useState, useEffect } from 'react'
import './App.css'
import InputTask from './InputTask'
import ToDoList from './ToDoList'

function App() {

  const [toDoList, setToDoList] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDoList))
  }, [toDoList])

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

  function saveCounter(id, newCounter){
    const newToDOList = toDoList.filter((toDo) => {
      if (toDo.id == id) {
        console.log(newCounter)
        toDo.counter = newCounter
        console.log(toDo)
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
        <ToDoList toDoList={toDoList}
          deleteTask={deleteTask}
          handleCheckbox={handleCheckbox}
          saveCounter={saveCounter}
        />
      </div>
    </>
  )
}

export default App


