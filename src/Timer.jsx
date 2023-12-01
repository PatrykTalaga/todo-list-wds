import { useState, useEffect } from "react"

function Timer({ id, saveCounter, startingCounter }){

  const [counter, setCounter] = useState(startingCounter)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(()=>{
    if (isRunning) {
      const key = setInterval(() => {
        setCounter(currentCounter => currentCounter+1)
      }, 1000)
      return () => clearInterval(key)
    }
  },[isRunning])


  function time(counter){
    const seconds = counter%60
    const minutes = Math.floor(counter/60)%60
    const hours = Math.floor(counter/3600)%24
    
    return `Time ${hours/10<1?`0${hours}`:hours}
      :${minutes/10<1?`0${minutes}`:minutes}
      :${seconds/10<1?`0${seconds}`:seconds}`
  }

  return (
      <>
        <h1>{time(counter)}</h1>
        <button onClick={()=>setIsRunning(!isRunning)}>Start/Stop</button>
        <button onClick={()=>setCounter(0)}>Clear</button>
        <br></br>
        <button onClick={()=>saveCounter(id, counter)}>Save Stopwatch</button>
      </>
  )
}

export default Timer