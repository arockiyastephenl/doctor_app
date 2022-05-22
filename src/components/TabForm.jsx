import React, {useState} from 'react';

// import { Tabs,Button } from 'antd';
// import IconSave from "../assets/icon/IconSave.svg";
// import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import IconAddRound from "../assets/logo/IconAddRound.png";
// import EducationTab from './EducationTab';
// import ProfessionTab from './ProfessionTab';
// import HomeTab from './HomeTab';
// import AddressTab from './AddressTab';


import {Button,  Tabs } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";
import AddressTab from './AddressTab';
const { TabPane } = Tabs;





// eslint-disable-next-line
function TabForm() {
  const [currentTab, setCurrentTab] = useState("Profile");
  function callback(key) {
    console.log(key);
    setCurrentTab (key)
  }
  const handleSelect = (eventKey) => {
    setCurrentTab("Education");
  };
  
  const handleSelect1 = (eventKey) => {
    setCurrentTab("Professionals");
  };

  const handleSelect2 = (eventKey) => {
    setCurrentTab("Address");
  };

  const callbackTabClicked = (key, event) => {
    console.log(key);
    console.log(event);
    setCurrentTab (key)
    if (key === 'Profile') {
      console.log('tab 1 clicked...');
    }
  };
   // add exta input fields
   const educationInput = [];
   const [educationAddField, seteducationAddField] = useState(educationInput);
   const addEduInput = () => {
     seteducationAddField(tabs => {
       return [ ...tabs, "end"];});
     };
  
   const professionInput = [];
   const [professionAddField, setprofessionAddField] = useState(professionInput);
   const addProfessInput = () => {
       setprofessionAddField(tabs => {
         return [ ...tabs, "end"];});
     };
  
  return (
    <div className='tab-align' >
    <div className='tab-bg' >
      <Tabs onChange={callback}  type="card" 
      activeKey ={currentTab}
     
    > 
      
        <TabPane onTabClick={callbackTabClicked} tab="Profile" key="Profile"  >
        <div className='home-tab'>
      <h1 className='profile-text'> Profile Details</h1>
        <form>  
            <input  className='form-input-field' placeholder='First Name'type="text" />
            <input  className='form-input-field' placeholder='Last Name' type="text" />
            <input  className='form-input-field' placeholder='Phone Number' type="number" />
            <input  className='form-input-field' placeholder='Date of birth' type="text" />
            <input  className='form-input-field' placeholder='Email' type="text" />
        </form>
        <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
        <Button className='btn next-btn' onClick={handleSelect}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
          </div>
        </TabPane>

        
       
        
        <TabPane onTabClick={callbackTabClicked} tab="Education" key="Education">
        <div className='home-tab'>
        <h1 className='profile-text'> Education Details</h1>
          <form>  
              <p style={{color:"#702cc7"}}>Add education details form  <img alt="" src={ IconAddRound} onClick={addEduInput} style={{marginLeft:"146px"}}/> </p>  
              <input  className='form-input-field' placeholder='Education deatils 1'type="text" />
              <input  className='form-input-field' placeholder='Education deatils 2' type="text" />
              <input  className='form-input-field' placeholder='Education deatils 3' type="text" />
              <div>
                {educationAddField.map((item, i) => {
                  return (
                    <input
                      // value={item.value}
                      // id={i}
                      className="form-input-field"
                      // type={item.type}  
                       />
                  );
                  })}
                   </div>
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn' onClick={handleSelect1}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

          </TabPane> 

        <TabPane onTabClick={callbackTabClicked} tab="Professionals" key="Professionals">
        <div className='home-tab'>
        <h1 className='profile-text'> Professionals Details</h1>
          <form>  
              <p style={{color:"#702cc7" }}>Add Profession details form  <img alt="" src={ IconAddRound} onClick={addProfessInput} style={{marginLeft:"146px"}}/> </p>  
              <input  className='form-input-field' placeholder='Clinic Name'type="text" />
              <input  className='form-input-field' placeholder='Clinic license number' type="text" />
              <input  className='form-input-field' placeholder='clinic phone number' type="number"  />
              <input  className='form-input-field' placeholder='Professionals Details 4' type="text" />
                {/* input fields */}
                <div>
                {professionAddField.map((item, i) => {
                  return (
                    <input
                      // value={item.value}
                      // id={i}
                      className="form-input-field"
                      // type={item.type}  
                       />
                  );
                })}
              </div>
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn' onClick={handleSelect2}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

        </TabPane>
      
        <TabPane  onTabClick={callbackTabClicked} tab="Address" key="Address">
          <AddressTab />
        </TabPane>


      </Tabs>
    </div> 

  </div>
 
  )
}
      

 


export default TabForm;