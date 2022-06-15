import React from 'react';
import { useState } from "react";
import '../../Style.css';


  
import IconMale from "../../assets/myPatientIcons/IconMale.svg";









function TabMyAppoint() {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
        <>
        <div className="container">
     <div style={{position:"absolute",top:"84px"}}>
       <div className="bloc-tabs">

        <div
          className={toggleState === 1 ? "tabs active-tabs1" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          
          <h1 
          className="tabshead tab-bg1" >Today's</h1>
               <img src={IconMale}  alt='' className='tabhead-icon'/> 
               <p className={toggleState === 1 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 1 ?  "tab-appoint-count" : "tab-appoint-count-color" }>2</p>
         </div>

        <div
          className={toggleState === 2 ? "tabs active-tabs2" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          
          <h1 
          className="tabshead tab-bg2" >Completed</h1>
               <img src={IconMale}  alt='' className='tabhead-icon'/> 
               <p className={toggleState === 2 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 2 ?  "tab-appoint-count" : "tab-appoint-count-color" }>100</p>
         </div>

        <div
          className={toggleState === 3 ? "tabs active-tabs3" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          
          <h1 
          className="tabshead tab-bg3" >Upcoming</h1>
               <img src={IconMale}  alt='' className='tabhead-icon'/> 
               <p className={toggleState === 3 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 3 ?  "tab-appoint-count" : "tab-appoint-count-color" }>12</p>
         </div>

        <div
          className={toggleState === 4 ? "tabs active-tabs4" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          
          <h1 
          className="tabshead tab-bg4" >Others</h1>
               <img src={IconMale}  alt='' className='tabhead-icon'/> 
               <p className={toggleState === 4 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Others</p>
               <p className={toggleState === 4 ?  "tab-appoint-count" : "tab-appoint-count-color" }>34</p>
         </div>
        

      
          </div>

    <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className='content-element'>
            <div className='appointments-card'>
              <img src={IconMale} alt='' className="appointment-icon"/>
              <h1 className='appointment-dates'> 10/06/2022 - FRIDAY</h1>
            </div>

          </div>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         
        </div>
          </div>
      </div>
    </div>

        
       
          
         
        </>

    )
}
export default TabMyAppoint;