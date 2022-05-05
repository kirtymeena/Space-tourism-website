import React, { useState, useEffect } from "react";
import data from "../data.json";
import crew0 from "../assets/crew/image-douglas-hurley.png";
import crew1 from "../assets/crew/image-mark-shuttleworth.png";
import crew2 from "../assets/crew/image-victor-glover.png";
import crew3 from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [name, setName] = useState("Douglas Hurley");
  const [role, setRole] = useState("Commander");
  const [index, setIndex] = useState(0);
  const [bio, setBio] = useState("");

  const setData = () => {
     data.crew.forEach((crw, idx) => {
      if (index === idx) {
        setName(crw.name);
        setRole(crw.role);
        setBio(crw.bio);
      }
    });
  };

  useEffect(() => {
    setData();
  });

  return (
    <div className="bg__crew container">
      <div className="flex__crew content">
        <div className="heading  top-heading uppercase ff-sans-cond text-accent letter-spacing-3">
        <p className="header">
              <span className="num">02</span>Meet your crew
            </p>
        </div>

        <div className="crew__info">
          <div className="crew__details">
          <h1 className="role uppercase text-accent ff-serif letter-spacing-3">
              {role}
            </h1>
            <h1 className="name uppercase ff-serif letter-spacing-3">{name}</h1>
            <p className="description text-accent letter-spacing-3 ff-sans-normal">{bio}</p>

            <div className="dot__indicator">
              <button className={`btn ${index===0?"active-btn":""}`} onClick={() => setIndex(0)}></button>
              <button className={`btn ${index===1?"active-btn":""}`} onClick={() => setIndex(1)}></button>
              <button className={`btn ${index===2?"active-btn":""}`} onClick={() => setIndex(2)}></button>
              <button className={`btn ${index===3?"active-btn":""}`} onClick={() => setIndex(3)}></button>
            </div>
          </div>
          <div className="crew__image">
            {index === 0 && <img src={crew0} alt="crew" />}
            {index === 1 && <img src={crew1} alt="crew" />}
            {index === 2 && <img src={crew2} alt="crew" />}
            {index === 3 && <img src={crew3} alt="crew" />}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Crew;
