import React from 'react';
// import { Row} from 'antd';
// import { ArrowLeftOutlined} from "@ant-design/icons";
// import Backdrop from "../assets/icon/Backdrop.svg";
// import DefaultAvatar from "../assets/icon/DefaultAvatar.svg";
// import AvatarCamera from "../assets/icon/AvatarCamera.svg";
// import { useNavigate } from "react-router-dom";

import {Button } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import LocationIcon from "../assets/icon/LocationIcon.svg";
// import AvatarCamera from "../assets/icon/AvatarCamera.svg";

import { useNavigate } from "react-router-dom";
// import { Header } from 'antd/lib/layout/layout';
import Header from './Header';

function ClinicProfileDetails() {  
    const history = useNavigate();
    return(
         <>
         <Header />
           <div className='tab-align' >
           <div className='user-profile-bg' >
        <div style={{overflowY:"scroll",height:"35rem"}}>
            <div>
            <div className='add-location-titles'>Address</div>
            <div style={{marginLeft:'13px'}}>
            <div>
            <p style={{fontSize:"15px", color:'darkgrey',marginBottom:"0px"}}>Address 1</p>
             <p  style={{fontSize:"15px",marginBottom:"9px" }}>HSR layout</p>  
             </div>
             <div>
            <p style={{fontSize:"15px", color:'darkgrey',marginBottom:"0px"}}>Address 2</p>
             <p  style={{fontSize:"15px", }}>Plot no-18/A</p>  
             </div>
             <div>
            <p style={{fontSize:"15px", color:'darkgrey',marginBottom:"0px"}}>State</p>
             <p  style={{fontSize:"15px",marginBottom:"9px" }}>Telangana</p>  
             </div>
             <div>
            <p style={{fontSize:"15px", color:'darkgrey',marginBottom:"0px"}}>Pin code</p>
             <p  style={{fontSize:"15px",marginBottom:"9px" }}>789000</p>  
             </div>
           
            
             </div>
             </div>
                <div>
                <div className='add-location-titles'>Working days/hours</div>
                <div style={{marginLeft:'8px'}}>
                <div style={{display:"flex"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px",marginLeft:"-15px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}> Select Day  </label>  
               <p>Monday</p>
              </div>
              <br />
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}>From  </label>  
              <p>9:00pm</p>
              </div>
              <br />
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}>To </label>  
              <p>11:00pm</p>
              </div>
              </div>  
              <div style={{display:"flex"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px",marginLeft:"-15px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}> select Day  </label>  
               <p>Monday</p>
              </div>
              <br />
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}>From  </label>  
              <p>9:00pm</p>
              </div>
              <br />
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",position:'relative',left:"23px",marginRight:"10px"}}>
              <label style={{color:'darkgrey',fontSize:"14px",paddingBottom:"10px"}}>To </label>  
              <p>11:00pm</p>
              </div>
              </div>  
                </div>
               
            
                
                </div> 
                    <div>
                    <div className='add-location-titles'>Locations</div>
                    <div style={{marginLeft:'12px'}}></div>
                    <div>
                   
                    <div style={{marginLeft:"31px"}}>
                    <p className='list-clinic-name'>XYZ Hospital</p>
                        <p  className='list-clinic-address'>HSR layout, hyderabad</p>
                        <p  className='list-clinic-country'>India</p>
                        </div>
                    </div>   
                    </div>  
                
                    <div style={{textAlign:"center",marginTop:"37px",paddingBottom:"18rem"}}>
                    <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
                    <Button className='btn next-btn' onClick={() => history("/clinic-success")} >Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
                    </div>
              </div> 
        </div>
        </div> 
          

         </>
        

    )
}
export default ClinicProfileDetails;