import React, { useState, useEffect } from "react";
import '../App.css';


const Manu = () => {
  const [medicine, setMedicine ] = useState({});
  const [ tab, setTab ] = useState( 1);
  const [ data, setData ] = useState();


  // add new data to the blockchain
  const add = () => {
    console.log( medicine );

    if( medicine['Date'] && medicine['MedicineName'] && medicine['MedicalUse'] && medicine['ManufacturerName'] ) {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "Date": medicine['Date'],
        "MedicineName": medicine['MedicineName'],
        "MedicalUse": medicine['MedicalUse'],
        "ManufacturerName": medicine['ManufacturerName'],
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
    else {
      alert("Please Provide All Data");
    }
    
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
      <div className="manu col-xs-10 col-md-10">

        <div className="manuTabs col-xs-10 col-md-10" >
          {/* <div onClick={()=>setTab(prev=>prev=1)} className="manuTab" >Add Medicine</div>
          <div onClick={()=>setTab(prev=>prev=2)} className="manuTab" >View Data</div>
          <div onClick={()=>setTab(prev=>prev=3)} className="manuTab" >Track Data</div> */}
        </div>


        <div >
          {
            tab === 1 ? (
              <div className="addMeds" >
                 {/* <input onChange={(e)=> setMedicine({...medicine, name:e.target.value }) }
                  placeholder="Medicine ID" className="input_" /> */}
                  
                <input onChange={(e)=> setMedicine({...medicine, MedicineName:e.target.value }) }
                  placeholder="Medicine Name" className="input_" />
                  
                <input onChange={(e)=> setMedicine({...medicine, ManufacturerName:e.target.value }) }
                  placeholder="Manufacturer Name" className="input_" />

                  <input onChange={(e)=> setMedicine({...medicine, MedicalUse:e.target.value }) }
                  placeholder="Medical Purpose" className="input_" />


                  <div className="Medate col-md-10">
                  <label for="receivedDate"><b> Manufactured Date : </b></label>

                  <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/>

                  <label for="receivedDate"><b> Distributed Date : </b></label>
                  <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/>

                  {/* <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/> */}
                  </div>
               
                
                  <br/>
                <button className="addBtn" onClick={() => add() } >
                  Enlist
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
