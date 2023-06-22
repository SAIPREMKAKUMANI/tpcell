import React, { useState } from "react";
import { Modal } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

function Register(props){
  const [details,setDetails]=useState({name: "",mail: "",pass: "",fac: false});
  const [open,setOpen]=useState(true);
  const [flag,setFlag]=useState(false);
  function handleClick(event){
    setOpen(false);
    setFlag(true);
    props.onSubmission(details);
    props.onFormSwitch('login');
    event.preventDefault();
  }
  function handleChange(props){
    const type=props.target.name;
    const val=(type !== "fac")? props.target.value: props.target.checked;
    console.log(val);
    setDetails(prevDetails => {
      return {
        ...prevDetails,
        [type]: val
      };
    });
  }
  return (
    <Modal open={open}
    onClose={()=>flag && setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
      <div className="form-group" style={{height: 380,marginTop: 90,border: "black"}}>
        <form onSubmit={handleClick}>
          <p><bold>Hello {details.name}</bold></p>
          <label className="form-label">
            <DriveFileRenameOutlineIcon />
          </label>
          <input className="form-control" name="name" placeholder="Full Name" onChange={handleChange} value={details.name}/>
          <label for="email" className="form-label">
            <EmailIcon />
          </label>
          <input name="mail" className="form-control" type="email" placeholder="name@gmail.com" onChange={handleChange} value={details.mail}/>
          <label for="password" className="form-label">
            <KeyIcon />
          </label>
          <input name="pass" class="form-control" type="password" placeholder="**********" onChange={handleChange} value={details.pass} />
          <div class="form-check">
          <input name="fac" class="form-check-input" type="checkbox" value={details.fac} onChange={handleChange} id="flexCheckChecked"/>
          <label class="form-check-label" for="flexCheckChecked"> Faculty </label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginLeft: 10,marginTop: 10,marginBottom: 10}}>Register Here</button>
          <button onClick={()=>props.onFormSwitch('login')} className="btn btn-primary" style={{ marginLeft: 10,marginTop: 10,marginBottom: 10}}>Already Have An Account? Login Here</button>
        </form>
      </div>
    </Modal>
  )
}
export default Register;