import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Login from "./Login";
import Register from "./Register";

function Home(details){
  const [notes, setNotes] = useState([]);
  const [currentForm,setCurrentForm]=useState('login');
  const [fac,setFac]=useState(false);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function toggleForm(formName){
    setCurrentForm(formName);
  }
  const [data,setData]=useState([{name:"Saiprem Kakumani" ,mail: "saipremkakumani@gmail.com",pass: "6281237154",fac: true}]);
  function obtainData(props){
    const res=props.fac;
    setFac(res);
    setData(prevData => {
      return [...prevData,props];
    })
    details.shareInfo(data);
  }
  function faculty(props){
    const res=props;
    setFac(res);
  }
  return (
    <div className="Home"> 
      {currentForm=='login' ? <Login onFormSwitch={toggleForm} userData={data} isFac={faculty}/> : <Register onFormSwitch={toggleForm} onSubmission={obtainData}/>}
      <CreateArea onAdd={addNote} fOs={fac}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Home;
