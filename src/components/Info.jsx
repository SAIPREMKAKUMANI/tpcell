import React from "react";

function Info(props){
    const data=props.details;
    return <div className="info">
      {data.map((name,mail) => {
        return <div>
        <p>{name}</p>
        <p>{mail}</p>
        </div>
      })}
   </div>
}

export default Info;