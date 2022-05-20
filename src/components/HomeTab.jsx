import React from 'react';
import { Row } from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";

import {Button, Divider, Tabs,Col } from 'antd';

import EducationTab from './EducationTab';
import ProfessionTab from './ProfessionTab';
import AddressTab from './AddressTab';

function HomeTab() {  
    return(
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
        <Button className='btn next-btn'>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
      </div>
        

    )
}
export default HomeTab;