import React, { useState } from "react";
import '../App.css';


const Manu = () => {
  const [medicine, setMedicine ] = useState({});


  const add = () => {
    console.log( medicine );
  }

    return ( 
      <div className="manu" >
        
        <div className="addMeds" >
          <input onChange={(e)=> setMedicine({...medicine, name:e.target.value }) }
            placeholder="Enter medicine name" className="input_" />

          <input onChange={(e)=> setMedicine({...medicine, details:e.target.value }) }
            placeholder="Enter medicine details" className="input_" />


          <button className="addBtn" onClick={() => add() } >
            Add Medicine
          </button>

        </div>
      </div>
    )
}

export default Manu;
