
import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
   
  let [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes").then((res)=>{
      setJokes(res.data)
    }).catch((error)=>{
      console.log("show me error " + error)
    })
  },[])
  
 console.log(jokes)
  return (
    <>
     <h1>Fetching data</h1>
    
      {jokes.map((val)=>{
        return <div key={val.id}> 
        <h1 >{val.title}</h1>
        <h3>{val.content}</h3>
        </div>
      })}
    </>
  )
}

export default App
