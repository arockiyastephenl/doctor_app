import React from 'react';
// import { useState } from "react";
import '../../../Style.css';
// import { Button} from 'antd';

  
// import IconMale from "../../assets/myPatientIcons/IconMale.svg";
import CalendarNavi from "../../../assets/myPatientIcons/CalendarNavi.svg";

// import IconProceed from "../../../assets/myAppointment/IconProceed.svg";

// import IconPerson from "../../../assets/myAppointment/IconPerson.svg";
// import IconSelectedCheckbox from "../../../assets/myAppointment/IconSelectedCheckbox.svg";
// import IconTimes from "../../../assets/myAppointment/IconTimes.svg";

// import IconOnlineConsulting from "../../../assets/myAppointment/IconOnlineConsulting.svg";

// import IconOnlineConsultingWhite  from "../../../assets/myAppointment/IconOnlineConsultingWhite.svg";
// import FooterSection from '../MyPatientsFolder/FooterSection';


function AppointmentOne() {
    // const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

    return (
        <>
    

   
         
          <div className='content-element'>
            <div className='appointments-card'>
              <img src={CalendarNavi} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates'> 10/06/2022 - FRIDAY</h1>
              
            </div>
            <hr />
            <div className='appointment-count'>
              <h1 className='count'>2</h1>
              <p className='appointment-text'>Appointments</p>
                
                </div>
          </div>
         
         

  

       
      
 

        
       
          
         
        </>

    )
}
export default AppointmentOne;