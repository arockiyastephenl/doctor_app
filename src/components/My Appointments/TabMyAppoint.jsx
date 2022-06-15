import React from 'react';
import { useState } from "react";
import '../../Style.css';
// import { Button} from 'antd';

  
// import IconMale from "../../assets/myPatientIcons/IconMale.svg";
// import CalendarNavi from "../../assets/myPatientIcons/CalendarNavi.svg";

// import IconProceed from "../../assets/myAppointment/IconProceed.svg";

// import IconPerson from "../../assets/myAppointment/IconPerson.svg";
// import IconSelectedCheckbox from "../../assets/myAppointment/IconSelectedCheckbox.svg";
// import IconTimes from "../../assets/myAppointment/IconTimes.svg";

// import IconOnlineConsulting from "../../assets/myAppointment/IconOnlineConsulting.svg";

// import IconOnlineConsultingWhite  from "../../assets/myAppointment/IconOnlineConsultingWhite.svg";
import FooterSection from '../MyPatientsFolder/FooterSection';
// import TodayPage from './Tab-pages/TodayPage';
// import CompletedPage from './Tab-pages/CompletedPage';
// import UpcomingPage from './Tab-pages/UpcomingPage';
// import OthersPage from './Tab-pages/OthersPage';
import { CalendarIconChange } from './MyAppointment-Icons/CalendarIconChange';
import { CompletedIconChange } from './MyAppointment-Icons/CompletedIconChange';
import { UpcomingIconChange } from './MyAppointment-Icons/UpcomingIconChange';
import { OthersIconChange } from './MyAppointment-Icons/OthersIconChange copy';
import AppointmentOne from './Tab-pages/AppointmentOne';
import AppointmentTwo from './Tab-pages/AppointmentTwo';




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
                  <CalendarIconChange style={{width:"23px"}} color={toggleState === 1 ? "white": "#702cc7"}/>
               {/* <img src={IconMale}  alt='' className='tabhead-icon'/>  */}
               <p className={toggleState === 1 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 1 ?  "tab-appoint-count" : "tab-appoint-count-color" }>2</p>
         </div>

        <div
          className={toggleState === 2 ? "tabs active-tabs2" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          
          <h1 
          className="tabshead tab-bg2" >Completed</h1>
            <CompletedIconChange style={{width:"23px"}} color={toggleState === 2 ? "white": "#2EB96C"}/>
               {/* <img src={IconMale}  alt='' className='tabhead-icon'/>  */}
               <p className={toggleState === 2 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 2 ?  "tab-appoint-count" : "tab-appoint-count-color" }>100</p>
         </div>

        <div
          className={toggleState === 3 ? "tabs active-tabs3" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          
          <h1 
          className="tabshead tab-bg3" >Upcoming</h1>
           <UpcomingIconChange style={{width:"23px"}} color={toggleState ===3  ? "white": "orange"}/>
               {/* <img src={IconMale}  alt='' className='tabhead-icon'/>  */}
               <p className={toggleState === 3 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Appointments</p>
               <p className={toggleState === 3 ?  "tab-appoint-count" : "tab-appoint-count-color" }>12</p>
         </div>

        <div
          className={toggleState === 4 ? "tabs active-tabs4" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          
          <h1 
          className="tabshead tab-bg4" >Others</h1>
           <OthersIconChange style={{width:"23px"}} color={toggleState ===4  ? "white": "skyblue"}/>
               {/* <img src={IconMale}  alt='' className='tabhead-icon'/>  */}
               <p className={toggleState === 4 ?  "tab-appoint-name" : "tab-appoint-name-color" }>Others</p>
               <p className={toggleState === 4 ?  "tab-appoint-count" : "tab-appoint-count-color" }>34</p>
         </div>
        

      
          </div>

    <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
               <div style={{height:"64rem"}}>
          <AppointmentOne/>
           <AppointmentTwo/>
           </div> 
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
            <div style={{height:"64rem"}}>
          <AppointmentOne/>
           <AppointmentTwo/>
           </div> 
            {/* <CompletedPage/> */}
             {/* <div style={{height:"102rem"}}>
          <div className='content-element'>
            <div className='appointments-card'>
              <img src={CalendarNavi} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"#2EB96C"}}> 10/06/2022 - FRIDAY</h1>
              
            </div>
            <hr />
            <div className='appointment-count'>
              <h1 className='count' style={{backgroundColor:"#2EB96C"}}>100</h1>
              <p className='appointment-text'>Appointments</p>
                
                </div>
          </div>
         
          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"#2EB96C"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
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

          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"#2EB96C"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
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
             </div> */}
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
            <div style={{height:"64rem"}}>
          <AppointmentOne/>
           <AppointmentTwo/>
           </div> 
               {/* <div style={{height:"102rem"}}>
                  <div className='content-element'>
                      <div className='appointments-card'>
                        <img src={CalendarNavi} alt='' style={{width:"18px"}}/>
                        <h1 className='appointment-dates' style={{color:"orange"}}> 10/06/2022 - FRIDAY</h1>
              
                      </div>
                  <hr />
            <div className='appointment-count'>
              <h1 className='count' style={{backgroundColor:"orange"}}>12</h1>
              <p className='appointment-text'>Appointments</p>
                
                </div>
               </div>
         
          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"orange"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"orange"}}> 08:30 PM - FRIDAY</h1>
              
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

          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"orange"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"orange"}}> 08:30 PM - FRIDAY</h1>
              
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
                </div> */}
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
               <div style={{height:"64rem"}}>
          <AppointmentOne/>
           <AppointmentTwo/>
           </div> 
            {/* <OthersPage/> */}
               {/* <div style={{height:"102rem"}}>
                  <div className='content-element'>
                      <div className='appointments-card'>
                        <img src={CalendarNavi} alt='' style={{width:"18px"}}/>
                        <h1 className='appointment-dates' style={{color:"skyblue"}}> 10/06/2022 - FRIDAY</h1>
              
                      </div>
                  <hr />
            <div className='appointment-count'>
              <h1 className='count' style={{backgroundColor:"skyblue"}}>34</h1>
              <p className='appointment-text'>Appointments</p>
                
                </div>
               </div>
         
          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"skyblue"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"skyblue"}}> 08:30 PM - FRIDAY</h1>
              
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

          <div className='content-element2'>
            <div className='appointments-card'>
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"skyblue"}}> 08:00 PM - FRIDAY</h1>
              
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
              <img src={IconTimes} alt='' style={{width:"18px"}}/>
              <h1 className='appointment-dates' style={{color:"skyblue"}}> 08:30 PM - FRIDAY</h1>
              
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
                </div> */}
        </div>
          </div>
      </div>
    </div>
    <FooterSection/>

        
       
          
         
        </>

    )
}
export default TabMyAppoint;