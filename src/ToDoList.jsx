function ToDoList({ toDoList, deleteTask, handleCheckbox}){
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
        </li>
      ))}
    </ul>
  )
}

export default ToDoList