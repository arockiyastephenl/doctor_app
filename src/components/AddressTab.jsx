import React, {useState} from 'react';

import {Button, Divider,Row} from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";
import { useNavigate } from "react-router-dom";

// import { Tabs } from 'antd';
// import './src/components/AddressTabHomeWorkstyle.css'




function AddressTab() {  
  const history = useNavigate();
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
  
  return ( 
   <>
   
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
     <Button className='btn next-btn' onClick={() => history("/doctor-profile-details")}>Next <img src={ IconNextArrow } alt=""  style={{marginLeft:"80px"}}/></Button>
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
           <input disabled={isView}   className='form-input-field' placeholder='Mobile number' type="number" />     
     </form>
     <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
     <Button className='btn next-btn' onClick={() => history("/doctor-profile-details")}>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
     </div>
     )} 
   </div>
     </>
    )
}
export default AddressTab;