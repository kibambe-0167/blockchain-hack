import React, { useState, useEffect } from "react";
import '../App.css';

const WareH = () => {

  const [medicine, setWareHouseInfo ] = useState({});
  const [ tab, setTab ] = useState( 1);
  const [ data, setData ] = useState();

  
    return ( 
      <div className="ware" >
        <div className="addToWareHouse" >
          {
            <input onChange={(e)=> setWareHouseInfo({...medicine, MedicineName:e.target.value }) }
            placeholder="Medicine Name" className="input_" />

            
          }
        </div>
      </div>
    )
}

export default WareH;



// add medical data to 
// blockchain. track and verify. 