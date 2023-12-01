
import Timer from "./Timer"

function ToDoList({ saveCounter, toDoList, deleteTask, handleCheckbox}){
  //console.log(toDoList)


  return (
    
    <ul>
      {toDoList.length === 0 && "Nothing to do"}
      {toDoList.map((toDo) => (
        <li key={toDo.id}>
          <input type='checkbox' checked={toDo.status}
           onChange={()=>handleCheckbox(toDo.id)}>
          </input>
          <label>{toDo.task}</label>
          <button onClick={()=>deleteTask(toDo.id)}>-</button>
          <Timer id={toDo.id} saveCounter={saveCounter} startingCounter={toDo.counter}/>
             
        </li>
      ))}
    </ul>
  )
}

export default ToDoList