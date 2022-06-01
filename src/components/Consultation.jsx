import React,{useState} from 'react';
import { Row,Col} from 'antd';

import BackArrow from "../assets/icon/BackArrow.svg";
import MenuDot from "../assets/icon/MenuDot.svg";
import Calendar from "../assets/icon/Calendar.svg";
import Patients from "../assets/icon/Patients.svg";
import Services from "../assets/icon/Services.svg";
import CreateAppointment from "../assets/icon/CreateAppointment.svg";
import StartConsultation from "../assets/icon/StartConsultation.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
// import 'react-tabs/style/react-tabs.css';

import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);


function Consultation() {
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
                  
                   <TabPanel style={{position:'absolute'}}>
                          <TabList>
                          <Tabs type="card" activekey ={currentTab} onChange={callback}>
                            <div style={{display:"flex",position:"absolute",top:"75px",left:"75px"}}>
                             <Tab onTabClick={callbackTabClicked} key='one'>
                            <div className='consult-page-number'>
                              <h1 className='number'>1</h1>
                            </div>
                               </Tab> 
                               <Tab onTabClick={callbackTabClicked} key='two'>
                            <div className='consult-page-number' >
                              <h1 className='number'>2</h1>
                            </div>
                               </Tab > 
                               <Tab onTabClick={callbackTabClicked} key='three'>
                            <div className='consult-page-number'>
                              <h1 className='number'>3</h1>
                            </div>
                               </Tab> 
                            </div> 
                            <div className='consult-description-page'> 
                              <TabPanel  >
        
                            <div>
                            <Space direction="vertical">
                                  <Search
                                    placeholder="Search patients name"
                                    onSearch={onSearch}
                                  className="search-input"
                                  />
                            </Space>
                            <h1 className='patients-main-title'>Patients Information</h1>
                         
                            <Col className='patients-information' onClick={handleSelect}>
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
                
                                </TabPanel> 
                                <TabPanel >
                                  <h1>Good morning</h1>
                                </TabPanel>
                                
                                <TabPanel >
                                  Testing
                                </TabPanel>
                              </div> 
                            </Tabs>        
                           </TabList>
                         
                     </TabPanel>
                 
                
                </Tabs>
                
               
               
             
      
              </Row>
        

           
             </div>
            </div>
        </>
    )
}
export default Consultation;