import React, { useEffect, useState } from "react";
import data from "../data.json"
import mars from "../assets/destination/image-mars.png";
import Tabs from "../components/Tab";
const Destination = () => {

  const [planet,setplanet] = useState("Moon")
  const[planetImage,setImage] = useState("")
  const[selected,setSelected] = useState("Moon")
  const[description,setDescription] = useState("")
  

  useEffect(()=>{
    data.destinations.map(dest=>{
      if(selected===dest.name){
      setImage(dest.images.png)
      setDescription(dest.description)
      console.log(planetImage)
      }
    })
  })
  return (
    <div className="bg__destination container">
      
      <div className="content destination__flex">
        <div className="flex__planet ff-sans-cond uppercase text-accent letter-spacing-3">
          <div className="heading">
          
            <p>
              <span className="num">01</span> pick your destination 
            </p>
          </div>
          <div className="planets">
            <img src={mars}/>
          </div>
                
        </div>
      
        <div className="flex__info">
          {/* tab indicator */}
          <div className='tab__list underline-indicator '>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator  ${selected==="Moon"?"active":""}`}>Moon</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Mars"?"active":""}`}>Mars</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Europa"?"active":""}`}>Europa</button>
        <button aria-selected="true" onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Titan"?"active":""}`}>Titan</button>
        </div>
          <div className="info">
            <p className="ff-sans uppercase letter-spacing-1">Mars</p>
            <p className="desc ff-sans-cond uupercase leeter-spacing-2 text-accent">{description}</p>
          </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default Destination;
