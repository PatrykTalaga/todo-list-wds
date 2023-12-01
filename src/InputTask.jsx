import { useState } from "react"

function InputTask({ submit }){
  
  const [input, setInput] = useState(
      {
       task:"",
       id: crypto.randomUUID(),
       status: false,
       counter: 0
      })
  
  function submitToDo(e){
      e.preventDefault()
      if (input.task == "") return
      submit(input)
      setInput(
        { task:"",
          id: crypto.randomUUID(),
          status: false,
          counter: 0
        })
    }
  return (
      <form onSubmit={submitToDo}>
          <label>ToDo List</label><br></br>
          <input type='text' value={input.task} 
            onChange={e => setInput({...input, task: e.target.value})}>
          </input>
          <button type='submit'>+</button>
      </form>
  )
}

export default InputTask