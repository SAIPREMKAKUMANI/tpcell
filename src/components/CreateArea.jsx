import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props){
    const [flg,setFlag]=useState(false);
    const [note, setNote] = useState({
      title: "",
      content: ""
    });
    const fac=props.fOs;
    function handleChange(event){
      const { name, value } = event.target;
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    } 
    function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      setFlag(false);
      event.preventDefault();
    }
    function handleClick(){
        setFlag(true);
    }
    function handleSubmit(event){
      event.preventDefault();
    }
    return <div>
    {fac &&
          <form className={flg ? "create-note" : "add-notification"} onSubmit={handleSubmit}>
            {flg && <input name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Topic"
            />}
            {flg && <textarea name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Add Notification"
            />}
            {!flg && <p><b>ADD NOTIFICATIONS</b></p>}
            {flg && <Fab color="primary" aria-label="add" onClick={submitNote}>
              <AddIcon />
            </Fab>}
            {!flg && <Fab color="primary" aria-label="add" onClick={handleClick}>
              <AddIcon />
            </Fab>}
          </form>
    }
    </div>
}
export default CreateArea;