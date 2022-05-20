import React from 'react';

import {Button} from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";


function ProfessionTab() {  
    return(
        <div className='home-tab'>
        <h1 className='profile-text'> Professionals Details</h1>
          <form>  
              <p style={{color:"#702cc7"}}>Add education details form  <img alt="" src={ IconAddRound} style={{marginLeft:"146px"}}/> </p>  
              <input  className='form-input-field' placeholder='Clinic Name'type="text" />
              <input  className='form-input-field' placeholder='Clinic license number' type="text" />
              <input  className='form-input-field' placeholder='clinic phone number' type="text" />
              <input  className='form-input-field' placeholder='Professionals Details 4' type="text" />
             
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn'>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

    )
}
export default ProfessionTab;