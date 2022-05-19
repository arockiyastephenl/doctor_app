import React from 'react';

import {Button, Divider, Tabs,Row,Col } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";


function EducationTab() {  
    
    return(
        <div className='home-tab'>
        <h1 className='profile-text'> Education Details</h1>
          <form>  
              <p style={{color:"#702cc7"}}>Add education details form  <img src={ IconAddRound} style={{marginLeft:"146px"}}/> </p>  
              <input  className='form-input-field' placeholder='Education deatils 1'type="text" />
              <input  className='form-input-field' placeholder='Education deatils 2' type="text" />
              <input  className='form-input-field' placeholder='Education deatils 3' type="text" />
             
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn'>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

    )
}
export default EducationTab;