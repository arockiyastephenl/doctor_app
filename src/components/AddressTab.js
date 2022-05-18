import React from 'react';
import HomeTab from './HomeTab';
import {Button, Divider, Tabs,Row,Col } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";


function AddressTab() {  
    return(
        <div className='home-tab'>
        <Row style={{justifyContent:"center"}}>
          <Col className='profile-text'> Home</Col>
          <Divider type='vertical' style={{backgroundColor:"black",width:"2px",height:'18px',marginTop:'5px'}}/>
          <Col className='profile-text'> Work</Col>
        </Row>
          <form>  
              <p style={{color:"#702cc7"}}>Address<img src={ IconAddRound} style={{marginLeft:"264px", marginRight:"-4px"}}/> </p>  
                <input  className='form-input-field' placeholder='Address 1'type="text" />
                <input  className='form-input-field' placeholder='Address 2' type="text" />
                <input  className='form-input-field' placeholder='City' type="text" />
                <input  className='form-input-field' placeholder='District' type="text" />
                <input  className='form-input-field' placeholder='State' type="text" />
             
          </form>
          <form>  
              <p style={{color:"#702cc7",marginLeft:"-279px"}}>Country </p>  
                <input  className='form-input-field' placeholder='Country'type="text" />
                <input  className='form-input-field' placeholder='Address 2' type="text" />     
          </form>
          <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
          <Button className='btn next-btn'>Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
        </div>

    )
}
export default AddressTab;