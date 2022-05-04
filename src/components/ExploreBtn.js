import React from "react";
import { Link } from "react-router-dom";

const ExploreBtn = () => {
  return (
    <div className="btn__outer ">
    <Link
      to="/destination"
      className="btn__explore uppercase text-dark  ff-seriff fs-600 letter-spacing-3"
    >
      Explore
    </Link>
  </div>
  );
};

export default ExploreBtn;
