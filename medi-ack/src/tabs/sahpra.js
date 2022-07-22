import React, {useState, useContext} from "react";
import '../App.css';

const Sahpra = () => {

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
                  placeholder="Medicine ID" className="input_" />

                  <input onChange={(e)=> setMedicine({...medicine, ManufacturerName:e.target.value }) }
                  placeholder="Staff Number" className="input_" />

                  
                  <div className="Medate col-xs-10 col-md-10">
                  <label for="receivedDate"><b> Reviewed Date : </b></label>

                  <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/>
                  
                  <h4>Do you approve medicine ?</h4>
                  <label><b>YES</b></label>
                  <input type="radio" id="radioYES" value="YES"/>
                  <label><b>NO</b></label>
                  <input type="radio" id="radioNO" value="NO"/><br/>
                  {/* <input onChange={(e)=> setMedicine({...medicine, Date:e.target.value }) }
                  className="input_" type="Date" placeholder = "Enter Date"/> */}
                  
                  </div>
                  <input onChange={(e)=> setMedicine({...medicine, ManufacturerName:e.target.value }) }
                  placeholder="Reason for declining" className="input_" />

                  <br/>
                <button className="addBtn" onClick={() => add() } >
                  Submit
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

export default Sahpra;
