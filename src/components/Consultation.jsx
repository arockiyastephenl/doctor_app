import React,{useState} from 'react';
import { Row,Col,Button} from 'antd';

import BackArrow from "../assets/icon/BackArrow.svg";
import MenuDot from "../assets/icon/MenuDot.svg";
import Calendar from "../assets/icon/Calendar.svg";
import Patients from "../assets/icon/Patients.svg";
import Services from "../assets/icon/Services.svg";
import CreateAppointment from "../assets/icon/CreateAppointment.svg";
import StartConsultation from "../assets/icon/StartConsultation.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import ArrowLeft from "../assets/icon/ArrowLeft.svg";
import 'react-tabs/style/react-tabs.css'
// import 'react-tabs/style/react-tabs.css';
import { useNavigate } from "react-router-dom";
// import PersonProfile from './PersonProfile'
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);


function Consultation() {
  const history = useNavigate();
  
  const[first,setFirst] = useState(true)
  const [toggled,toggle] = useState(false)
  const [view,hide ] = useState(false)
 
  const [currentTab, setCurrentTab] = useState("one");
  function callback(key) {
    console.log(key);
    setCurrentTab (key)
  }
  const handleSelect = (eventKey) => {
    setCurrentTab("two");
  };
  const callbackTabClicked = (key, event) => {
    console.log(key);
    console.log(event);
    setCurrentTab (key)
    if (key === 'one') {
      console.log('tab 1 clicked...');
    }
  };
    return (
        <>
           <div className='container'>
           <div className='bg-container1' >
             <Row className='backdrop-container'>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Wellyfe</h1>       
            
                    <img src={MenuDot} alt='' className='menu-dot'/>
            
             </Row>
           
            <p className='consult-text'>Consultation</p>
            <Row className='backdrop-icon-container'>
              
               <Tabs className='consult-icon-container'>
                   <TabList style={{display:"contents"}}>
                   <Tab className='consult-page-round-bg'>
                       <img src={Calendar} alt='' className='icons' />
                  </Tab>
                  <Tab className='consult-page-round-bg'>
                       <img src={Patients} alt='' className='icons' />
                  </Tab>
                  <Tab className='consult-page-round-bg'>
                       <img src={Services} alt='' className='icons' />
                  </Tab>
                  <Tab className='consult-page-round-bg'>
                       <img src={CreateAppointment} alt='' className='icons' />
                  </Tab>
                  <Tab className='consult-page-round-bg' tab='startconsult' >
                       <img src={StartConsultation} alt='' className='icons' />
                  </Tab>
                 
                      </TabList> 
                  
                 
              
              
                   <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
                      <h2>1</h2>
                  </TabPanel>
                  <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
                      <h2>2</h2>
                   </TabPanel>
                   <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
                      <h2>3</h2>
                  </TabPanel>
                  <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
                      <h2>4</h2>
                   </TabPanel>
                  
                   <TabPanel >
              
                         
                            <div style={{position:'absolute',display:'flex',top:"91px",left:"145px"}}> 
                            <div className='consult-page-number'>
                              <h1 className='number'>1</h1>
                            </div>
                              
                              
                            <div className='consult-page-number' >
                              <h1 className='number'>2</h1>
                            </div>
                        
                            
                            <div className='consult-page-number'>
                              <h1 className='number'>3</h1>
                            </div>
                            </div>
      
    
              
        
                        {first && <div className='consult-description-page'>
                           <div>
                           <Space direction="vertical">
                                  <Search
                                    placeholder="Search patients name"
                                    onSearch={onSearch}
                                  className="search-input"
                                  />
                            </Space>
                            <h1 className='patients-main-title'>Patients Information</h1>
                         
                            <Col onClick={() => toggle(toggled => !toggled)} className='patients-information' >
                              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                <p className='patients-heading'>Name</p>
                                  <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                  <p className='patients-heading'>Name</p>
                                    <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                           
                           </Col>
                           
                            <Col   className='patients-information'>
                              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                <p className='patients-heading'>Name</p>
                                  <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                  <p className='patients-heading'>Name</p>
                                    <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                            </Col>
                            <Col className='patients-information'>
                              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                <p className='patients-heading'>Name</p>
                                  <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                                  <p className='patients-heading'>Name</p>
                                    <p className='patients-info'>Raju Bhai</p>                      
                                </div>
                            </Col>
                            </div>
                          </div>
                            }

                           {toggled && <div className='consult-description-page'>
                          <div style={{padding:"15px",position:"absolute", top:"-19px"}}>
                                <h1 className='patients-main-title'>Appointment Confirmation</h1>
                             
                                    <p style={{textAlign:"left",fontWeight:'bold'}}>Appointment</p>
                                    <div style={{textAlign:"left" , margin:"0px"}}>
                                    <p style={{display:"flex" , margin:"0px"}}> service:<span><p>Confirmed</p></span></p>
                                    <p style={{display:"flex" , margin:"0px"}}> Provider:<span><p>PavanKumar</p></span></p>
                                    <p style={{display:"flex" , margin:"0px"}}> Start:<span><p>15/05/2022 22:30</p></span></p>
                                    <p style={{display:"flex" , margin:"0px"}}> Timezone:<span><p>Calcutta(+5:30)</p></span></p>                                         
                                    </div>
                                    <p style={{textAlign:"left", marginTop:"23px",fontWeight:'bold'}}>Patients</p>
                                    <div style={{textAlign:"left" , margin:"0px"}}>
                                    <p style={{display:"flex" , margin:"0px"}}> Patients:<span><p>Rajubhai</p></span></p>
                                    <p style={{display:"flex" , margin:"0px"}}> Phone Number:<span><p>12345566</p></span></p>
                                    <p style={{display:"flex" , margin:"0px"}}> Email:<span><p>raju@gmail.com</p></span></p>
                                    
                                    </div>
                                  <div style={{marginTop:"19px",marginBottom:'9px'}}>                                                    
                                    <Button className='btn save-btn' onClick={() => setFirst(first => !first)}>Back  <img src={ ArrowLeft } alt="" style={{marginLeft:"80px"}} /></Button>
                                   <Button className='btn next-btn' onClick={() => hide(view => !view)} >Begin <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>  
                                   </div>
                                 </div>
                                 </div>
                                }
                                 
                           { view && <div className='consult-description-page'>   
                                <div style={{padding:"15px", display:"flex",flexDirection:"column", marginTop:'95px',marginBottom:'20px'}}  >
                                
                                  <Button  onClick={() => toggle(toggled => !toggled)} className='btn-regular save-btn'>Regular </Button>
                                  <div style={{marginTop:"22px",marginBottom:"22px"}}>
                                      <p style={{ paddingLeft: "13px",marginTop:"11px",fontWeight:'700' ,color:"black"}}>OR</p>
                                      </div>
                                  <Button  onClick={() => history("/personProfile")} className='btn-regular report-btn'>Report Verification</Button>
                                 
                                </div>
                                </div>
                                }
                          </TabPanel> 
              
                         
        
                 
                
                </Tabs>
                
               
               
             
      
              </Row>
        

           
             </div>
            </div>
        </>
    )
}
export default Consultation;