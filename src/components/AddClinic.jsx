import React, {useState} from 'react';

// import { Tabs,Button } from 'antd';
// import IconSave from "../assets/icon/IconSave.svg";
// import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import IconAddRound from "../assets/logo/IconAddRound.png";
// import EducationTab from './EducationTab';
// import ProfessionTab from './ProfessionTab';
// import HomeTab from './HomeTab';
// import AddressTab from './AddressTab';
// import Header from './Header';


import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";
import DefaultAvatar from "../assets/icon/DefaultAvatar.svg";
import AvatarCamera from "../assets/icon/AvatarCamera.svg";
import {Button,  Tabs, Row } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";

// import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;





// eslint-disable-next-line
function AddClinic() {


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
         <div className='bg-container1'>
             <img alt="" src={Backdrop}  style={{position:'absolute'}}/>
            <Row className='header-arrow'>
                <ArrowLeftOutlined className='arrow-size'/>
                    <h1 className='header-title'>Add New Clinic</h1>       
            </Row>
            <img alt="" src= { DefaultAvatar} className="avatar"/>
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
              <p style={{color:"#702cc7"}}>Add education details form  <img alt="" src={ IconAddRound}  style={{marginLeft:"146px"}}/> </p>  
              <input disabled={isView}  className='form-input-field' placeholder='Education deatils 1'type="text" />
              <input disabled={isView}  className='form-input-field' placeholder='Education deatils 2' type="text" />
              
             
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
            <Button className='btn next-btn' onClick={handleSelect1}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
          </div>

        </TabPane>
     

          </Tabs>
      </div> 

    </div>
  </>
  )
}
      

 


export default AddClinic;