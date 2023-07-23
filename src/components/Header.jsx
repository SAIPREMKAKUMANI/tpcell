import React ,{useState}from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header(){
    const [flag,setFlag]=useState(false);
    const [flag2,setFlag2]=useState(false);
    const [flag3,setFlag3]=useState(false);
    const [flag4,setFlag4]=useState(false);
    const navigate=useNavigate();
    const location=useLocation();
    const name=location.state.name;
    const mail=location.state.mail;
    const fac=location.state.fac;
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
        <Link class="nav-link active" aria-current="page" onClick={()=>{navigate('/Home',{state: {fac: fac,name: name,mail: mail}})}} >
          <HomeIcon />
        </Link>
        <Link class="nav-link active" aria-current="page" style={{fontWeight: flag && "bold"}} onMouseOver={() => setFlag(true)} onMouseOut={() => setFlag(false)}  to="/Training" state={{fac: fac,name: name,mail: mail}}>TRAINING</Link>
        <Link class="nav-link active" aria-current="page" style={{fontWeight: flag2 && "bold"}} onMouseOver={() => setFlag2(true)} onMouseOut={() => setFlag2(false)} to="/Placement" state={{fac: fac,name: name,mail: mail}}>PLACEMENT</Link>
        <Link class="nav-link active" aria-current="page" style={{fontWeight: flag3 && "bold"}} onMouseOver={() => setFlag3(true)} onMouseOut={() => setFlag3(false)} to="/AboutUs" state={{fac: fac,name: name,mail: mail}}>ABOUT</Link>
        <Link class="nav-link active" aria-current="page" style={{fontWeight: flag4 && "bold"}} onMouseOver={() => setFlag4(true)} onMouseOut={() => setFlag4(false)} to="/">LOGIN</Link>
        <Link class="nav-link active" aria-current="page" onClick={()=>navigate('Info',{state:{name: name,mail: mail,fac: fac}})} href="/Info">
          <AccountCircleIcon />
        </Link>
        </div>
      </div>
    </div>
  </div>;
}
export default Header;
