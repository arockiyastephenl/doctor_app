import React, {useState} from 'react';

// import 'react-dropdown/style.css';


import { Select } from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";
import LocationIcon from "../assets/icon/LocationIcon.svg";
import AvatarCamera from "../assets/icon/AvatarCamera.svg";
import {Button,  Tabs, Row } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import IconAddRound from "../assets/logo/IconAddRound.png";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;



const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleChange2 = (value) => {
  console.log(`selected ${value}`);
};
// const handleChange3 = (value) => {
//   console.log(`selected ${value}`);
// };
// const handleChange4 = (value) => {
//   console.log(`selected ${value}`);
// };

// eslint-disable-next-line
function AddClinic() {
  const history = useNavigate();

  const [currentTab, setCurrentTab] = useState("Address");
  function callback(key) {
    console.log(key);
    setCurrentTab (key)
  }
  const handleSelect = (eventKey) => {
    setCurrentTab("Working days/hours");
  };
  
  const handleSelect1 = (eventKey) => {
    setCurrentTab("Locations");
  };

 

  const callbackTabClicked = (key, event) => {
    console.log(key);
    console.log(event);
    setCurrentTab (key)
    if (key === 'Address') {
      console.log('tab 1 clicked...');
    }
  };
  
     
     //view-edit mode
    const [isView,setIsView] = useState(true)
    const handleClick =() => {
      setIsView(true)
        
    }
    const handleClick2 =() => {
      setIsView(false)
    }
    
    
  return (
    <>
     <div style={{textAlign:"center"}}>
     <button style={{width:"60px",borderRadius:"29px",marginRight:'5px',backgroundColor:"cyan",borderWidth:"2px"}} onClick={handleClick}>View</button>
     <button style={{width:"60px",borderRadius:"29px",marginRight:'5px',backgroundColor:"cornsilk",borderWidth:"2px"}} onClick={handleClick2}>Edit</button>
    </div>
    
    <div className='container'>
         <div className='bg-container1' >
             <img alt="" src={Backdrop}  style={{position:'absolute'}}/>
            <Row className='header-arrow'>
                <ArrowLeftOutlined className='arrow-size'/>
                    <h1 className='header-title'>Add New Clinic</h1>       
            </Row>
            <div className='location-card' style={{position:"absolute",right:'159px',top:"71px"}}>
               <img alt='' src={LocationIcon}/>
            </div>
            <img alt="" src={ AvatarCamera } className="camera"/>
             </div>
             </div>
        

    

   
    <div className='tab-align' >
      <div className='tab-bg' >
        <Tabs onChange={callback}  type="card" 
         activeKey ={currentTab}> 
      
        <TabPane onTabClick={callbackTabClicked} tab="Address" key="Address"  >
        <div className='home-tab'>
         <h1 className='profile-text'> Address</h1>
          <form>  
            <input disabled={isView}  className='form-input-field' placeholder='Name of the Clinic'type="text" />
            <input disabled={isView}  className='form-input-field' placeholder='Address 1' type="text" />
            <input disabled={isView}  className='form-input-field' placeholder='Address 2' type="text" style={{textTransform:"capitalize"}} />
            <input disabled={isView}  className='form-input-field' placeholder='State' type="text" />
            <input disabled={isView}  className='form-input-field' placeholder='Pin code' type="number" />
            <input disabled={isView}  className='form-input-field' placeholder='Country' type="text" />
         </form>
        <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
        <Button className='btn next-btn' onClick={handleSelect}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
          </div>
          </TabPane>

        
       
        
        <TabPane onTabClick={callbackTabClicked} tab="Working days/hours" key="Working days/hours">
        <div className='home-tab'>
         <h1 className='profile-text'> Working days/hours</h1>
          <form>  
            <div style={{display:"flex"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginBottom:'120px',position:'relative',left:"23px",marginRight:"5px"}}>
              <label style={{color:"#702cc7",paddingLeft:"4px",fontSize:"14px",paddingBottom:"10px"}}>Day  </label>  
              <Select
                  defaultValue="Monday"
                  style={{
                    width: 140,
                    height:40
                  }}
                  onChange={handleChange}
                >
                    <Option disabled={isView} value="Monday">Monday</Option>
                    <Option disabled={isView} value="Tuesday">Tuesday </Option>
                    <Option disabled={isView} value="jWednesday">Wednesday</Option>
                    <Option disabled={isView} value="Thursday">Thursday </Option>
                    <Option disabled={isView} value="Friday">Friday</Option>
                    <Option disabled={isView} value="Saturday">Saturday </Option>
                    <Option disabled={isView} value="Sunday">Sunday </Option>
               </Select>
               <br/>
               <Select
                  defaultValue="Tuesday"
                  style={{
                    width: 140,
                    height:40
                  }}
                  onChange={handleChange2}
                >
                    <Option disabled={isView} value="Monday">Monday</Option>
                    <Option disabled={isView} value="Tuesday">Tuesday </Option>
                    <Option disabled={isView} value="jWednesday">Wednesday</Option>
                    <Option disabled={isView} value="Thursday">Thursday </Option>
                    <Option disabled={isView} value="Friday">Friday</Option>
                    <Option disabled={isView} value="Saturday">Saturday </Option>
               </Select>
              </div>
              <br />
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginBottom:'120px',position:'relative',left:"23px"}}>
              <label style={{color:"#702cc7",paddingLeft:"4px",fontSize:"14px",paddingBottom:"10px"}}>Time  </label>  
              {/* <Select
                  
                  style={{
                    width: 100,
                    height:40,
                
                  }}
                  onChange={handleChange3}
                  placeholder="From"
                >
                     <Option disabled={isView} value="Monday">1:00</Option>
                    <Option disabled={isView} value="Tuesday">2:00 </Option>
                    <Option disabled={isView} value="jWednesday">3:00</Option>
                    <Option disabled={isView} value="Thursday">4:00</Option>
                    <Option disabled={isView} value="Friday">5:00</Option>
                    <Option disabled={isView} value="Saturday">6:00 </Option>
                    <Option disabled={isView} value="Sunday">7:00 </Option>                 
                    <Option disabled={isView} value="Monday">8:00</Option>
                    <Option disabled={isView} value="Tuesday">9:00 </Option>
                    <Option disabled={isView} value="jWednesday">10:00</Option>
                    <Option disabled={isView} value="Thursday">11:00</Option>
                    <Option disabled={isView} value="Friday">12:00</Option>
                    <Option disabled={isView} value="Saturday">13:00 </Option>
                    <Option disabled={isView} value="Sunday">14:00 </Option>
                    <Option disabled={isView} value="Monday">15:00</Option>
                    <Option disabled={isView} value="Tuesday">16:00 </Option>
                    <Option disabled={isView} value="jWednesday">17:00</Option>
                    <Option disabled={isView} value="Thursday">18:00</Option>
                    <Option disabled={isView} value="Friday">19:00</Option>
                    <Option disabled={isView} value="Saturday">20:00 </Option>
                    <Option disabled={isView} value="Sunday">21:00 </Option>
                    <Option disabled={isView} value="Monday">22:00</Option>
                    <Option disabled={isView} value="Tuesday">23:00 </Option>
                    <Option disabled={isView} value="jWednesday">24:00</Option>
                  
               </Select>
               <br/>
               <Select
                  
                  style={{
                    width: 100,
                    height:40,
                
                  }}
                  onChange={handleChange3}
                  placeholder="From"
                >
                     <Option disabled={isView} value="Monday">1:00</Option>
                    <Option disabled={isView} value="Tuesday">2:00 </Option>
                    <Option disabled={isView} value="jWednesday">3:00</Option>
                    <Option disabled={isView} value="Thursday">4:00</Option>
                    <Option disabled={isView} value="Friday">5:00</Option>
                    <Option disabled={isView} value="Saturday">6:00 </Option>
                    <Option disabled={isView} value="Sunday">7:00 </Option>                 
                    <Option disabled={isView} value="Monday">8:00</Option>
                    <Option disabled={isView} value="Tuesday">9:00 </Option>
                    <Option disabled={isView} value="jWednesday">10:00</Option>
                    <Option disabled={isView} value="Thursday">11:00</Option>
                    <Option disabled={isView} value="Friday">12:00</Option>
                    <Option disabled={isView} value="Saturday">13:00 </Option>
                    <Option disabled={isView} value="Sunday">14:00 </Option>
                    <Option disabled={isView} value="Monday">15:00</Option>
                    <Option disabled={isView} value="Tuesday">16:00 </Option>
                    <Option disabled={isView} value="jWednesday">17:00</Option>
                    <Option disabled={isView} value="Thursday">18:00</Option>
                    <Option disabled={isView} value="Friday">19:00</Option>
                    <Option disabled={isView} value="Saturday">20:00 </Option>
                    <Option disabled={isView} value="Sunday">21:00 </Option>
                    <Option disabled={isView} value="Monday">22:00</Option>
                    <Option disabled={isView} value="Tuesday">23:00 </Option>
                    <Option disabled={isView} value="jWednesday">24:00</Option>
                  
               </Select> */}
              </div>
              </div>  
             
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn' onClick={handleSelect1}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

          </TabPane> 

        <TabPane onTabClick={callbackTabClicked} tab="Locations" key="Locations">
          <div className='home-tab'>
           <h1 className='profile-text'>Locations </h1>
            <form>  
               
                <input disabled={isView}  className='form-input-field' placeholder='Address
                'type="text" />
               
                 
            </form>
            <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
            <Button className='btn next-btn'  onClick={() => history("/addClinicDetails")}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
          </div>

        </TabPane>
     

          </Tabs>
      </div> 

    </div>
  </>
  )
}
      

 


export default AddClinic;