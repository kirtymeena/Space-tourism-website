import React, { useEffect, useState } from "react";
import data from "../data.json"
import Mars from "../assets/destination/image-mars.png";
import Moon from "../assets/destination/image-moon.png";
import Titan from "../assets/destination/image-titan.png";
import Europa from "../assets/destination/image-europa.png";

const Destination = () => {

  const[planetImage,setImage] = useState("")
  const[selected,setSelected] = useState("Moon")
  const[description,setDescription] = useState("")
  const [planetName,setName] = useState("Moon")
  const [imgName,setImgName] = useState(["Moon,Mars"])

  useEffect(()=>{
    const setData=()=>{
    data.destinations.forEach(dest=>{
      if(selected===dest.name){
      setImage(dest.images.png)
      setDescription(dest.description)
      setName(dest.name)
      console.log(dest.images.png)
      
      }
    
    })
  }
  setData();
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
            {planetName=="Moon"&&<img src={Moon} alt="planet"/>}
            {planetName=="Mars"&&<img src={Mars} alt="planet"/>}
            {planetName=="Europa"&&<img src={Europa} alt="planet"/>}
            {planetName=="Titan"&&<img src={Titan} alt="planet"/>}
          </div>
                
        </div>
       
        <div className="flex__info">
          {/* tab indicator */}
          <div className='tab__list underline-indicator '>
        <button onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator  ${selected==="Moon"?"active":""}`}>Moon</button>
        <button  onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Mars"?"active":""}`}>Mars</button>
        <button  onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Europa"?"active":""}`}>Europa</button>
        <button onClick={e=>setSelected(e.target.textContent)} className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${selected==="Titan"?"active":""}`}>Titan</button>
        </div>
          <div className="info">
            <p className="ff-sans uppercase letter-spacing-1">{planetName}</p>
            <p className="desc ff-sans-cond uupercase leeter-spacing-2 text-accent">{description}</p>
          </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default Destination;
