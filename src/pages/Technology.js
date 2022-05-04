import React, { useEffect, useState } from "react";
import data from "../data.json"
import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg"
import launchVehicle2 from "../assets/technology/image-launch-vehicle-landscape.jpg"
import capsule from "../assets/technology/image-space-capsule-portrait.jpg"
import capsule2 from "../assets/technology/image-space-capsule-landscape.jpg"
import spacePort from "../assets/technology/image-spaceport-portrait.jpg"
import spacePort2 from "../assets/technology/image-spaceport-landscape.jpg"

const Technology = () => {
  const [name,setName] = useState("")
  const[index,setIndex] = useState(0)
  const[descp, setDescp] = useState("")
  
  const setData = ()=>{
    data.technology.forEach((tech,idx)=>{
      if(idx===index){
      setName(tech.name)
      setDescp(tech.description)
      }
    })
  }
  useEffect(()=>{
    setData()
  })
  return (
    <div class="bg__technology container">
      <div className="flex__tech content">
        <div class>
          <div className="heading uppercase ff-sans-cond text-accent letter-spacing-3">
            <p className="header">
              <span className="num">03</span>Space launch 101
            </p>
          </div>
          <div className="tech__info">
            <div className="tech__details">
              <div className="button__navigation">
                <div>
                  <button onClick={()=>setIndex(0)} className={`ff-sans-normal ${index===0 ? "active":""}`}>1</button>
                </div>
                <div>
                  <button onClick={()=>setIndex(1)} className={`ff-sans-normal ${index===1 ? "active":""}`}>2</button>
                </div>
                <div>
                  <button onClick={()=>setIndex(2)} className={`ff-sans-normal ${index===2 ? "active":""}`}>3</button>
                </div>
              </div>
              <div className="tech__text">
                <p className="top-text text-accent uppercase ff-sans-cond letter-spacing-3">
                  The Terminology....
                </p>
                <h1 className="middle-text text-white uppercase ff-serif letter-spacing-2">
                  {name}
                </h1>
                <p className="text-bottom text-accent ff-sans-normal">
                  {descp}
                </p>
              </div>
            </div>
            <div className="tech__item">
              
            </div>
            <div className="tech__images">
              {index===0 && <img className="desktop" src={launchVehicle} alt="launchVehicle"/>}
              {index===1 && <img className="desktop" src={spacePort} alt="spacePort"/>}
              {index===2 && <img className="desktop" src={capsule}  alt="capsule"/>}

              {index===0 && <img className="mobile" src={launchVehicle2} alt="launchVehicle"/>}
              {index===1 && <img className="mobile" src={spacePort2} alt="spacePort"/>}
              {index===2 && <img className="mobile" src={capsule2} alt="capsule"/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
