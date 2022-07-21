import React, { useState } from "react";
import './App.css';


// components
import Manu from "./tabs/manu";
import Consumer from "./tabs/consumer";
import Clinic from "./tabs/clinic";
import WareH from "./tabs/warehouse";
import Sahpra from "./tabs/sahpra";


function App() {
  const [ tab, setTab ] = useState(1);


  return (
    <div className="App">
      {/* tabs starts  */}
      <div className="header" >
        <div className="tabs" >
          <div onClick={()=> setTab(prev=>prev=1) } className="tab" >
             Manufacturer
          </div>

          <div onClick={()=> setTab(prev=>prev=2) } className="tab" >
             Warehouses 
          </div>

          <div onClick={()=> setTab(prev=>prev=3) } className="tab" >
            SAHPRA 
          </div>

          <div onClick={()=> setTab(prev=>prev=4) } className="tab" >
            Retailers
          </div>

          <div onClick={()=> setTab(prev=>prev=5) } className="tab" >
            Consumer 
          </div>
        </div>

        <div className="title" >
          Medi-Track
        </div>
      </div>



      <div className="main" >
        {
          tab === 1 ? <Manu /> :
          tab === 2 ? <WareH /> :
          tab === 3 ? <Sahpra /> :
          tab === 4 ? <Clinic /> :
          tab === 5 ? <Consumer /> : "UnKnown Tab"
        }
      </div>
      
    </div>
  );
}

export default App;