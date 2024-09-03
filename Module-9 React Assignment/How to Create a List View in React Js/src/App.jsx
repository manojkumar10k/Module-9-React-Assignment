import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const [box,boxSet]= useState(false)
  const Change=()=>{
    boxSet(!box)
  }

  const obj =[
    {id:1,name:"Apple"},
    {id:2,name:"KiWi"},
    {id:3,name:" Mango"},
    {id:4,name:" Banana"}
  ]
  
  return (
<div>
  <h1>The "React Way" to Render a List</h1>

  <input type="checkbox" defaultValue={box} id="" onChange={Change} />All Select

{  obj.map((v)=>{
    if(v)
    {
      return <li key={v.id}>{v.id} 
      <input type="checkbox"
     
      defaultValue={true}
      checked={box} 
      onChange={(e)=>{boxSet((box)? "1" : console.log(e.target.checked))}}
      />
      {v.name}</li>
    }
  })}
  </div>
  )
}

export default App
