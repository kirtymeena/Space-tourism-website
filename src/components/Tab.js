import React, { useState } from 'react'
import { button } from 'react-router-dom'

const Tabs = () => {
    const[selected,setSelected] = useState("")
  return (
    <div className='tab__list underline-indicator '>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator  ${selected==="Moon"?"active":""}`}>Moon</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Mars"?"active":""}`}>Mars</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Europa"?"active":""}`}>Europa</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Titan"?"active":""}`}>Titan</button>
    </div>
  )
}

export default Tabs