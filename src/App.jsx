
import { useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react'

// eslint-disable-next-line react/prop-types
function Content({content,class1 ,el}){

//  const el = useRef({})
u
  return (<div className={`content ${class1}` } ref={el} >content {content}</div>)
  
}


function App() {
//  window.onscroll=(function(){
//   console.log()
//  setShow(true)
//  })
const el = useRef()
 const contents=[1,2,3]
const [show,setShow]=useState(false)


  return (
    <div className='container'  >
    
   {
   contents.map(content=>( show&&content>5) ?<Content class1='x'  key={content} content={content}  el={el}  /> : <Content class1='y' key={content} content={content} el={el} />)}
    </div>
  )
  
}

export default App
