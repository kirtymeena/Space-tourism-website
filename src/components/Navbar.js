import React, {  useState } from "react";
import { Link,useLocation} from "react-router-dom";
import NavLogo from "../assets/shared/logo.svg";
import hamIcon from "../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const params = useLocation()
  console.log(params.pathname)
  return (
    <nav className="nav container-nav">
      <div className="nav__logo">
        <img src={NavLogo} alt="nav-logo" />
      </div>
      <div className="nav__line">
        <hr />
      </div>

      {/* mobile icon hamburger */}
      <div className="nav__hamburger container">
        <img
          src={hamIcon}
          onClick={() => setOpen(true)}
          className="hamburger"
          alt="hamburger-icon"
        />
        <div className={`nav__slide ${open ? "open" : "close"}`}>
          <div className="cross">
            <svg
              onClick={() => setOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
          <div className="nav__slide-items">
            <ul className="nav__slide-link">
              <li className="nav-link underline__indicator">
                <Link
                  to="/"
                  onClick={(e) => {setActive(e.target.textContent); setOpen(false)}}
                  className={`link ff-sans-cond letter-spacing-2 uppercase ${
                     active === "Home" ? "active" : " "
                  }`}
                >
                  <span>00</span>Home
                </Link>
              </li>
              <li className="nav-link underline__indicator">
                <Link
                  to="/destination"
                  onClick={(e) => {setActive(e.target.textContent);setOpen(false)}}
                  className={`link ff-sans-cond letter-spacing-2 uppercase ${
                   active === "Destination" ? "active" : " "
                  }`}
                >
                  <span>01</span>Destination
                </Link>
              </li>
              <li className="nav-link underline__indicator">
                <Link
                  to="/crew"
                  onClick={(e) => {setActive(e.target.textContent);setOpen(false)}}
                  className={`link ff-sans-cond letter-spacing-2 uppercase ${
                     active === "Crew" ? "active" : " "
                  }`}
                >
                  <span>02</span>Crew
                </Link>
              </li>
              <li className="nav-link underline__indicator">
                <Link
                  to="/technology"
                  onClick={(e) => {setActive(e.target.textContent);setOpen(false)}}
                  className={`link ff-sans-cond letter-spacing-2 uppercase ${
                    active === "Technology" ? "active" : " "
                  }`}
                >
                  <span>03</span>Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav__links">
        <ul className="nav__link">
          <li
            onClick={(e) => setActive(e.target.textContent)}
            className="underline__indicator"
          >
            <Link
              to="/"
              className={`link ff-sans-cond letter-spacing-2 uppercase ${
                (active === "00" || active === "00Home") || params.pathname==="/" ? "active" : " "
              }`}
            >
              <span>00</span>Home
            </Link>
          </li>
          <li className="underline__indicator">
            <Link
              to="/destination"
              onClick={(e) => setActive(e.target.textContent)}
              className={`link ff-sans-cond letter-spacing-2 uppercase ${
                active === "01" || active === "01Destination" || params.pathname==="/destination" ? "active" : " "
              }`}
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li className="underline__indicator">
            <Link
              to="/crew"
              onClick={(e) => setActive(e.target.textContent)}
              className={`link ff-sans-cond letter-spacing-2 uppercase ${
                active === "02" || active === "02Crew" || params.pathname==="/crew" ? "active" : " "
              }`}
            >
              <span >02</span>Crew
            </Link>
          </li>
          <li className="underline__indicator">
            <Link
              to="/technology"
              onClick={(e) => setActive(e.target.textContent)}
              className={`link ff-sans-cond letter-spacing-2 uppercase ${
                active === "03" || active === "03Technology" ||  params.pathname==="/technology" ? "active" : " "
              }`}
            >
              <span >03</span>Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
