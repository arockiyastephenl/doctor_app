import React, {useState} from 'react';

// import { Tabs,Button } from 'antd';
// import IconSave from "../assets/icon/IconSave.svg";
// import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import IconAddRound from "../assets/logo/IconAddRound.png";
// import EducationTab from './EducationTab';
// import ProfessionTab from './ProfessionTab';
// import HomeTab from './HomeTab';
// import AddressTab from './AddressTab';
import Header from './Header';

import {Button,  Tabs, Divider,Row } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";

import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;





// eslint-disable-next-line
function TabForm() {
 const history = useNavigate();

  const [currentTab, setCurrentTab] = useState("Profile");
  function callback(key) {
    console.log(key);
    setCurrentTab (key)
  }
  const handleSelect = (eventKey) => {
    setCurrentTab("Education");
  };
  
  const handleSelect1 = (eventKey) => {
    setCurrentTab("Work History");
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
    //address home & work button 
     const [homeBtn, setHomeBtn] = useState(true);
     const [workBtn, setWorkBtn] = useState(false);
     const homeBtnHandler = () => {
       setHomeBtn(true);
       setWorkBtn(false);
     };
     const workBtnHandler = () => {
       setHomeBtn(false);
       setWorkBtn(true);
     }
   
     // home address input field
     const homeAddressInput = [];
     const [homeAddressAddField, setHomeAddressAddField] = useState(homeAddressInput);
     const addHomeAddressInput = () => {
       setHomeAddressAddField(tabs => {
           return [ ...tabs, "end"];});
         };  
     const workAddressInput = [];
     const [workAddressAddField, setWorkAddressAddField] = useState(workAddressInput);
     const addWorkAddressInput = () => {
         setWorkAddressAddField(tabs => {
               return [ ...tabs, "end"];});
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
    
    <Header />
   
    <div className='tab-align' >
      <div className='tab-bg' >
        <Tabs onChange={callback}  type="card" 
         activeKey ={currentTab}> 
      
        <TabPane onTabClick={callbackTabClicked} tab="Profile" key="Profile"  >
        <div className='home-tab'>
         <h1 className='profile-text'> Profile Details</h1>
          <form>  
            <input disabled={isView}  className='form-input-field' placeholder='First Name'type="text" />
            <input disabled={isView}  className='form-input-field' placeholder='Last Name' type="text" />
            <input disabled={isView}  className='form-input-field' placeholder='Date of birth' type="date" style={{textTransform:"capitalize"}} />
            <input disabled={isView}  className='form-input-field' placeholder='Doctor license number' type="number" />
            <input disabled={isView}  className='form-input-field' placeholder='Phone Number' type="number" />
            <input disabled={isView}  className='form-input-field' placeholder='Email' type="email" />
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
              <input disabled={isView}  className='form-input-field' placeholder='Education deatils 1'type="text" />
              <input disabled={isView}  className='form-input-field' placeholder='Education deatils 2' type="text" />
              <input disabled={isView}  className='form-input-field' placeholder='Education deatils 3' type="text" />
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

        <TabPane onTabClick={callbackTabClicked} tab="Work History" key="Work History">
          <div className='home-tab'>
           <h1 className='profile-text'>Work History Details </h1>
            <form>  
                <p style={{color:"#702cc7" }}>Add work history Details form  <img alt="" src={ IconAddRound} onClick={addProfessInput} style={{marginLeft:"146px"}}/> </p>  
                <input disabled={isView}  className='form-input-field' placeholder='Clinic Name'type="text" />
                <input disabled={isView}  className='form-input-field' placeholder='Clinic address' type="text" />
                <input disabled={isView}  className='form-input-field' placeholder='Clinic phone number' type="number"  />
                <input disabled={isView}  className='form-input-field' placeholder='Notes' type="text" />
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
        <div className='home-tab'>
           <Row style={{justifyContent:"center"}}>
     <button className='profile-text' onClick={homeBtnHandler} > Home</button>
     <Divider type='vertical' style={{backgroundColor:"black",width:"2px",height:'18px',marginTop:'5px'}}/>
     <button className='profile-text' key="Work" onClick={workBtnHandler}> Work</button>
            </Row>
   {homeBtn && (
    <div >
     <form>  
         <p style={{color:"#702cc7"}}>Address<img alt="" src={ IconAddRound} onClick={addHomeAddressInput} style={{marginLeft:"264px", marginRight:"-4px"}}/> </p>  
           <input disabled={isView} className='form-input-field' placeholder='Address 1'type="text" />
           <input disabled={isView} className='form-input-field' placeholder='Address 2' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='City' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='District' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='State' type="text" />
           <div>
                {homeAddressAddField.map((item, i) => {
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
     <form>  
         <p style={{color:"#702cc7",marginLeft:"-279px"}}>Country </p>  
           <input disabled={isView}  className='form-input-field' placeholder='Country'type="text" />
           <input disabled={isView} className='form-input-field' placeholder='Mobile number' type="number"  />     
     </form>
     <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
     <Button className='btn next-btn' onClick={() => history("/userProfilestore")}>Next <img src={ IconNextArrow } alt=""  style={{marginLeft:"80px"}}/></Button>
     </div>
     )} 
     {workBtn && ( 
     <div >
      
     <form>  
          <p style={{color:"#702cc7"}}>Address < img alt='' src={ IconAddRound} onClick={addWorkAddressInput} style={{marginLeft:"264px", marginRight:"-4px"}}/> </p>  
           <input disabled={isView} className='form-input-field' placeholder='Address 1'type="text" />
           <input disabled={isView} className='form-input-field' placeholder='Address 2' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='City' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='District' type="text" />
           <input disabled={isView} className='form-input-field' placeholder='State' type="text" />
           <div>
                {workAddressAddField.map((item, i) => {
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
     <form>  
         <p style={{color:"#702cc7",marginLeft:"-279px"}}>Country </p>  
           <input disabled={isView}  className='form-input-field' placeholder='Country'type="text" />
           <input disabled={isView}  value="+91" className='form-input-field' placeholder='Mobile number' type="number" />     
     </form>
     <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
     <Button className='btn next-btn' onClick={() => history("/userProfilestore")}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
     </div>
     )} 
          </div>
        </TabPane>


          </Tabs>
      </div> 

    </div>
  </>
  )
}
      

 


export default TabForm;