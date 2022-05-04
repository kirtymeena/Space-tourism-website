import React, { useEffect, useState } from "react";
import data from "../data.json";
import Mars from "../assets/destination/image-mars.png";
import Moon from "../assets/destination/image-moon.png";
import Titan from "../assets/destination/image-titan.png";
import Europa from "../assets/destination/image-europa.png";

const Destination = () => {
  const [selected, setSelected] = useState("Moon");
  const [description, setDescription] = useState("");
  const [planetName, setName] = useState("Moon");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    const setData = () => {
      data.destinations.forEach((dest) => {
        if (selected === dest.name) {
          setDescription(dest.description);
          setName(dest.name);
          setDistance(dest.distance);
          setTravel(dest.travel);
        }
      });
    };
    setData();
  });
  return (
    <div className="bg__destination container">
      <div className="content destination__flex">
      <div className="heading uppercase ff-sans-cond text-accent letter-spacing-3">
            <p className="header__text">
              <span className="num">01</span> pick your destination
            </p>
          </div>
          <div className="flex-row">
        <div className="flex__planet ff-sans-cond uppercase text-accent letter-spacing-3">
          
          <div className="planets">
            {planetName === "Moon" && <img src={Moon} alt="planet" />}
            {planetName === "Mars" && <img src={Mars} alt="planet" />}
            {planetName === "Europa" && <img src={Europa} alt="planet" />}
            {planetName === "Titan" && <img src={Titan} alt="planet" />}
          </div>
        </div>

        <div className="flex__info">
          {/* tab indicator */}
          <div className="tab__list underline-indicator ">
            <button
              onClick={(e) => setSelected(e.target.textContent)}
              className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator  ${
                selected === "Moon" ? "active" : ""
              }`}
            >
              Moon
            </button>
            <button
              onClick={(e) => setSelected(e.target.textContent)}
              className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${
                selected === "Mars" ? "active" : ""
              }`}
            >
              Mars
            </button>
            <button
              onClick={(e) => setSelected(e.target.textContent)}
              className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${
                selected === "Europa" ? "active" : ""
              }`}
            >
              Europa
            </button>
            <button
              onClick={(e) => setSelected(e.target.textContent)}
              className={`button uppercase text-accent ff-sans-cond letter-spacing-2 underline__indicator ${
                selected === "Titan" ? "active" : ""
              }`}
            >
              Titan
            </button>
          </div>
          <div className={`info fade`}>
            <h1 className="planet__name ff-serif uppercase letter-spacing-1">
              {planetName}
            </h1>
            <p className="desc ff-sans-cond uupercase leeter-spacing-2 text-accent ">
              {description}
            </p>
            <div className="info__bottom">
              <hr />
              <div className="info__footer">
                <div>
                  <p className="info__text text-accent uppercase letter-spacing-3 ff-sans-cond ">
                    Avg. Distance
                  </p>
                  <p className="info__text2 uppercase ff-sans-cond">{distance}</p>
                </div>
                <div>
                  <p className="info__text text-accent uppercase letter-spacing-3 ff-sans-cond ">
                    EST. Travel time
                  </p>
                  <p className="info__text2 uppercase ff-sans-cond ">{travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Destination;
