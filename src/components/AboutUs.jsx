import React from "react";
import Carousel from "./Carousel";
import Ex from "./Ex";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate,useLocation } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";

function AboutUs(){
  const location=useLocation();
  const name=location.state.name;
  const mail=location.state.mail;
  const fac=location.state.fac;
  const navigate=useNavigate();
  return <div>
    <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://www.nitrr.ac.in/" target="_blank">
        <img src="/images/logo.png" alt="NIT RAIPUR" /> 
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" state={{fac: fac,name: name,mail: mail}} to="/Home" >
          <HomeIcon />
        </NavLink>
        <NavLink style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/Training" state={{fac: fac,name: name,mail: mail}} className="nav-link active" aria-current="page" >TRAINING</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/Placement" state={{fac: fac,name: name,mail: mail}}>PLACEMENT</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/AboutUs" state={{fac: fac,name: name,mail: mail}}>ABOUT</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/">LOGIN</NavLink>
        <NavLink className="nav-link active" aria-current="page" state={{fac: fac,name: name,mail: mail}} to="/Info">
          <AccountCircleIcon />
        </NavLink>
        </div>
      </div>
    </div>
  </div>
    <Carousel />
    <hr />
    <Ex />
  </div>
}

export default AboutUs;
