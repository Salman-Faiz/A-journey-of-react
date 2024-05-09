import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  

  return (
    <>
    
      <h1>Vite + React</h1>
      <h2>salman faiz</h2>
      
    <Todo task='Components' isDone={true}></Todo>
    <Todo task='React' isDone={false}></Todo>
    <Todo task='Props' isDone={true}></Todo>

      {/* <Devices name='iphone' price='120k'></Devices>
      <Devices name='samsung' price='80k'></Devices>
      <Devices name='onePlus' price='55k'></Devices>
     <Student></Student>
     
     <Developer name='salmanFaiz' type='frontend'></Developer>
     <Player name='FAiz' sector='football' type='RB'></Player>
     <Player name='FAiz' sector='cricket' type='all'></Player>
     <Player  sector='hockey' ></Player> */}
     
     
      
    
    </>
  )
}

function Student(){
  const name= 'salman';
  const age = 28;
 
  return <h3 className='student '>hello its {name} , age of {age} a junior web developer</h3>
   
}
const {name,sector,type} = {name:'salman',sector:'cricket', type:'All rounder'}
function Player({name='noname',sector='none',type='akk'}){

 
 return (
<h2 className='player'>hello i am {name} i play {sector} position:{type}</h2>
 )

}

function Developer(props){
  const developerStyle ={
    margin : '20px',
    padding : '20px',
    border :'2px solid purple',
    borderRadius : '20px',
    backgroundColor :'green'
   

  }
  return (
    <div>
      <h3 style={developerStyle}>hi am {props.name}, a webDeveloper.currently working in {props.type}</h3>
    </div>
  )
}

function Devices(props){
  console.log(props)
  return <h2>i have a {props.name} price:{props.price}</h2>
}

export default App
