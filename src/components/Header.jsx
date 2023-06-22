import React ,{useState}from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    const [flag,setFlag]=useState(false);
    const [flag2,setFlag2]=useState(false);
    const [flag3,setFlag3]=useState(false);
    return <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://www.nitrr.ac.in/" target="_blank">
        <img src="/images/logo.png" alt="NIT RAIPUR" /> 
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">
          <HomeIcon />
        </a>
        <a class="nav-link active" aria-current="page" style={{textDecoration: flag && "underline"}} onMouseOver={() => setFlag(true)} onMouseOut={() => setFlag(false)} href="/Training">TRAINING</a>
        <a class="nav-link active" aria-current="page" style={{textDecoration: flag2 && "underline"}} onMouseOver={() => setFlag2(true)} onMouseOut={() => setFlag2(false)} href="/Placement">PLACEMENT</a>
        <a class="nav-link active" aria-current="page" style={{textDecoration: flag3 && "underline"}} onMouseOver={() => setFlag3(true)} onMouseOut={() => setFlag3(false)} href="/AboutUs">ABOUT</a>
        <a class="nav-link active" aria-current="page" href="/Info">
          <AccountCircleIcon />
        </a>
        
        </div>
      </div>
    </div>
  </div>;
}
export default Header;