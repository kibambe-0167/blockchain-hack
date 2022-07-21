import React, { useState, useEffect } from "react";
import '../App.css';


const Manu = () => {
  const [medicine, setMedicine ] = useState({});
  const [ tab, setTab ] = useState( 1);
  const [ data, setData ] = useState();


  // add new data to the blockchain
  const add = () => {
    console.log( medicine );

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": medicine['name'],
      "password": medicine['details']
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  // end of function


  // start function for getting all data
  const getData = async () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: { 
        "Accept": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'POST, PUT, DELETE, GET, OPTIONS',
      }
    };
    
    await fetch("http://127.0.0.1:5000/showall", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData( prev => prev=result['chain'] );
        console.log( result['chain'] );
      })
      .catch(error => console.log('error', error));
  }
  // end function for getting data.


  // 
  useEffect(() => {


    // get all data
    getData();
  },[])

    return ( 
      <div className="manu" >

        <div className="manuTabs" >
          <div onClick={()=>setTab(prev=>prev=1)} className="manuTab" >Add Data</div>
          <div onClick={()=>setTab(prev=>prev=2)} className="manuTab" >View Data</div>
          <div onClick={()=>setTab(prev=>prev=3)} className="manuTab" >Track Data</div>
        </div>


        <div >
          {
            tab === 1 ? (
              <div className="addMeds" >
                <input onChange={(e)=> setMedicine({...medicine, name:e.target.value }) }
                  placeholder="Enter medicine name" className="input_" />

                <input onChange={(e)=> setMedicine({...medicine, details:e.target.value }) }
                  placeholder="Enter medicine details" className="input_" />

                <button className="addBtn" onClick={() => add() } >
                  Add Medicine
                </button>

              </div>
            ) :
            tab === 2 ? (
              data && data.map((val, key) => (
                <div className="manuData" >
                  data -- value
                </div>
              ))
            ) :
            tab === 3 ? "Track Data" :
            "Wrong Tab"
          }
        </div>
        
        
      </div>
    )
}

export default Manu;
