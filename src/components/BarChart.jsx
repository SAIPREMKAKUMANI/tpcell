import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import {userData} from "./data";

function BarChart(){
    const option = {
        responsive: true,
        plugins: {
          legend: { position: "chartArea" },
          title: {
            display: true,
            text: "Modular Bar Chart",
          },
        },
      };
      
    const [UserData,setUserData]=useState({
        labels: userData.map(ele => ele.year),
        datasets: [{
            label: "Eligible",
            data: userData.map(ele => ele.eligible)
        },
        {
            label: "Offers Recieved",
            data: userData.map(ele => ele.recieved)
        }
        ]
    });
  return <div className="barGraph"><Bar data={UserData} options={option}/></div>;
}

export default BarChart;