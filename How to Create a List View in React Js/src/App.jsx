import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const [box,boxSet]= useState(false)
  const i = box
  const Change=()=>{
    boxSet(!box)
  }

  const obj =[
    {id:1,name:"Apple"},
    {id:2,name:"KiWi"},
    {id:3,name:"Mango"}
  ]
  
  return (
<div>
  <h1>Example</h1>

  {/* <input type="text" value={box}/> */}
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

{/* {obj.map((v,i)=>
<p key={v.name}>
  if(v.name ==)
  {
    <input type="checkbox" name="" id=""  checked={box}  onChange={
      (e)=>{
    
        boxSet((box)? "" : e.target.checked)
      }
    } />
  } */}
 {/* <li>{v.name}</li>
</p> */}

{/* )}    */}
</div>
  )
}

export default App
