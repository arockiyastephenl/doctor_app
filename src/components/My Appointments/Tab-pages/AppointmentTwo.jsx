import React from 'react';

import '../../../Style.css';
import { Button} from 'antd';

  

// import CalendarNavi from "../../../assets/myPatientIcons/CalendarNavi.svg";

import IconProceed from "../../../assets/myAppointment/IconProceed.svg";

import IconPerson from "../../../assets/myAppointment/IconPerson.svg";
import IconSelectedCheckbox from "../../../assets/myAppointment/IconSelectedCheckbox.svg";
import IconTimes from "../../../assets/myAppointment/IconTimes.svg";

import IconOnlineConsulting from "../../../assets/myAppointment/IconOnlineConsulting.svg";

import IconOnlineConsultingWhite  from "../../../assets/myAppointment/IconOnlineConsultingWhite.svg";


function AppointmentTwo() {
//     const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

    return (
        <>
       
     

             {/* <div style={{height:"102rem"}}> */}
          {/* <div className='content-element'>
            <div className='appointments-card'>
              <img src={CalendarNavi} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"#2EB96C"}}> 10/06/2022 - FRIDAY</h1>
              
            </div>
            <hr />
            <div className='appointment-count'>
              <h1 className='count' style={{backgroundColor:"#2EB96C"}}>100</h1>
              <p className='appointment-text'>Appointments</p>
                
                </div>
          </div> */}
         
          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' > 08:00 PM - FRIDAY</h1>
              
            </div>
            <hr />
          
            <div className='appointment-name-card' >
                  <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='appointment-content '>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='appointment-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='appointment-content '>1234454</p>
                  </div>


                    
         <div style={{marginTop:"13px",marginBottom:'9px', marginLeft:"0px",display:'flex'}}>             
             <Button className='appoint-btn'>In Person <img src={IconPerson} alt="" style={{marginTop:"-1px",marginLeft:"51px",width:"16px"}} /></Button>
            <Button className='appoint-btn select-btn'> 
              <img src={IconSelectedCheckbox} alt="" style={{marginLeft:"-6px",marginRight:"6px",width:"24px"}}/>
                  Online
                <img src={IconOnlineConsultingWhite} alt="" style={{marginLeft:"46px",width:"24px",marginTop:"-1px"}}/>
            </Button>  
        
          </div>

                             

                 </div>
                
                
          </div>

          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt=''/>
              <h1 className='appointment-dates' style={{color:"#2EB96C"}}> 08:30 PM - FRIDAY</h1>
              
            </div>
            <hr />
          
            <div className='appointment-name-card' >
                  <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='appointment-content'>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='appointment-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='appointment-content '>1234454</p>
                  </div>


                    
         <div style={{marginTop:"13px",marginBottom:'9px', marginLeft:"0px",display:'flex'}}>             
         <Button className='appoint-btn select-btn'> 
              <img src={IconSelectedCheckbox} alt="" style={{marginLeft:"-6px",marginRight:"6px",width:"24px"}}/>
                  In Person
                <img src={IconOnlineConsultingWhite} alt="" style={{marginLeft:"24px",width:"24px",marginTop:"-1px"}}/>
            </Button>  
            <Button className='appoint-btn'>Online <img src={IconOnlineConsulting} alt="" style={{marginTop:"-1px",marginLeft:"51px",width:"24px"}} /></Button>
        
          </div>

                             

                 </div>
                
                
          </div>

        

          <Button  style={{left:"-2px",bottom:'-28px',width:"393px"}}  className='btn-regular save-btn'>Proceed
             <img src={ IconProceed } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
             </Button>
             {/* </div> */}
          
    


        
       
          
         
        </>

    )
}
export default AppointmentTwo;