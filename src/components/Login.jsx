import { Modal } from "@mui/material";
import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate,useLocation } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Login(props){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [open,setOpen]=useState(true);
  const [match,setMatch]=useState(false);
  const [faculty,setFaculty]=useState(false);
  const [name,setName]=useState("");
  const [valid,setValid]=useState(true);
  const navigate=useNavigate();
  function handleClick(event){
    const data=props.userData;
    data.map(entry => {
      if(entry.mail === email && entry.pass === pass){
        {entry.fac && setFaculty(true)}
        setMatch(true);
      }
    })
    if(match){
      navigate('/Home',{
        state:{
          name: name,
          mail: email,
          fac: faculty
        }
      })
    }else{
      setValid(false);
    }
    event.preventDefault();
  }
  function handleInput(props){
    const val=props.target.value;
    setEmail(val);
  }
  function handlePass(props){
    const val=props.target.value;
    setPass(val);
  }
  function handleName(props){
    const val=props.target.value;
    setName(val);
  }
  function HeaderFn(){
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
        <Link class="nav-link active" aria-current="page" onClick={()=>{navigate('/Home',{state: {fac: faculty,name: name,mail: email}})}} >
          <HomeIcon />
        </Link>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/Training" state={{fac: faculty,name: name,mail: email}}>TRAINING</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/Placement" state={{fac: faculty,name: name,mail: email}}>PLACEMENT</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/AboutUs" state={{fac: faculty,name: name,mail:email}}>ABOUT</NavLink>
        <NavLink className="nav-link active" aria-current="page" style={({isActive})=>{return {fontWeight:isActive && 'bold'}}} to="/">LOGIN</NavLink>
        <NavLink className="nav-link active" aria-current="page" onClick={()=>navigate('Info',{state:{name: name,mail: email,fac: faculty}})} href="/Info">
          <AccountCircleIcon />
        </NavLink>
        </div>
      </div>
    </div>
  </div>
  }
  return (
    <>
    <HeaderFn/>
    {!valid && <Alert onClose={() => {}}>Please Enter Valid Credentials</Alert>}
  <div className="login">
    <Modal open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
      <div className="form-group-login">
        <form onSubmit={handleClick}>
          <label for="name" className="form-label">Name</label>
          <input name="name" style={{marginLeft: 0}} className="form-control" placeholder="Saiprem" onChange={handleName} value={name}/>
          <label for="email" className="form-label">
            <EmailIcon />
          </label>
          <input name="email" style={{marginLeft: 0}} className="form-control" type="email" placeholder="name@gmail.com" onChange={handleInput} value={email}/>
          <label for="password" className="form-label">
            <KeyIcon />
          </label>
          <input name="pass" style={{marginLeft: 0}} class="form-control" type="password" placeholder="**********" onChange={handlePass} value={pass} />
          <button type="submit" className="btn btn-primary" style={{ display: "block",marginLeft: 10,marginTop: 10,marginBottom: 10}}>Log In</button>
          <button onClick={() => props.onFormSwitch('Register')} className="btn btn-primary" style={{ marginLeft: 10,marginBottom: 10}}>Don't have an Account? Register Here</button>
        </form>
      </div>
    </Modal>
    </div>
    </>
  )
}

export default Login;
