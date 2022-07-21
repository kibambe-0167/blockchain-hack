import React, {useState, useContext} from 'react';
import '../App.css';

const Clinic = () => {

const [medicine, setMedicine ] = useState({});
const [ tab, setTab ] = useState(1);
const [ data, setData ] = useState();

  //Adding method.
  const add = () => {};


    return (
      <div className="manu" >

        <div className="manuTabs" >
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
                  placeholder="Medicine ID" className="input_" />
                  
                <input onChange={(e)=> setMedicine({...medicine, ManufacturerName:e.target.value }) }
                  placeholder="Retail Name" className="input_" />

                  <input onChange={(e)=> setMedicine({...medicine, ManufacturerName:e.target.value }) }
                  placeholder="Medicine Purpose" className="input_" />

                  <div className="Medate col-md-10">
                  <label for="receivedDate"><b>Date Received: </b></label>

                  <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/>

                  {/* <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/> */}
                  </div>
               
                 
                  <br/>
                <button className="addBtn" onClick={() => add() } >
                  Verify
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

export default Clinic;
