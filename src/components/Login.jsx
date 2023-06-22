import { Modal } from "@mui/material";
import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

function Login(props){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [open,setOpen]=useState(true);
  const [match,setMatch]=useState(false);
  const [faculty,setFaculty]=useState(false);
  function checkMatch(){
    if(!match){
      setOpen(true);
    }else{
      setOpen(false);
    }
  }
  function handleClick(event){
    const data=props.userData;
    data.map(entry => {
      if(entry.mail === email && entry.pass === pass){
        {entry.fac && setFaculty(true)}
        setMatch(true);
      }
    })
    props.isFac(faculty);
    checkMatch();
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
  return (
    <Modal open={open}
    onClose={checkMatch}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
      <div className="form-group">
        <form onSubmit={handleClick}>
          <label for="email" className="form-label">
            <EmailIcon />
          </label>
          <input name="email" className="form-control" type="email" placeholder="name@gmail.com" onChange={handleInput} value={email}/>
          <label for="password" className="form-label">
            <KeyIcon />
          </label>
          <input name="pass" class="form-control" type="password" placeholder="**********" onChange={handlePass} value={pass} />
          <button type="submit" className="btn btn-primary" style={{ marginLeft: 10,marginTop: 10,marginBottom: 10}}>Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('Register')} className="btn btn-primary" style={{ marginLeft: 10,marginBottom: 10}}>Don't have an Account? Register Here</button>
      </div>
    </Modal>
  )
}

export default Login;