import React from 'react'
import "./t.css"
import { useEffect,useState } from 'react'

const Darkmode = () => {
    const[theme,setTheme]=useState("light-theme")
const toggletheme=()=>{
    if(theme==="dark-theme"){
        setTheme("light-theme")
    }
    else{
        setTheme("dark-theme")
    }
}
useEffect(()=>{
    document.body.className=theme
        },[theme])
    
  return (
    <>
   <div className='container'>
   <button className='btn' onClick={()=>toggletheme()}>Toggle mode</button>
   <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate doloribus ad, minus pariatur rerum necessitatibus, vitae delectus eaque dolorum placeat beatae omnis tempore? Totam im!</p>
   </div>
    </>
  )
}

export default Darkmode
