import React from 'react';

import { Row} from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";

import IconAddRound from "../assets/logo/IconAddRound.png";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../assets/icon/LocationIcon.svg";
import EditIcon from "../assets/icon/EditIcon.svg";

function ListOfClinics() {  
    const history = useNavigate();


    return(
        <>
      
         <div className='bg-container1'>
             <img alt="" src={Backdrop}  style={{position:'absolute'}} />
            <Row >
                <ArrowLeftOutlined  style={{position:"absolute",top:'25px',left:"14px",fontSize:'26px',color:"white"}}/>
                    <h1 className='header-title' style={{position:"absolute",top:'12px',left:"53px",fontSize:"30px",color:"white",fontWeight:"bold"}}>List of clinic</h1>       
            </Row>
            <div style={{width:"415px",height:"825px",backgroundColor:"white",position:"absolute",left:"-1px",top:'70px',padding:'12px'}}>
           <div style={{width:"392px",height:"42px",backgroundColor:"white",padding:"9px",boxShadow:"0px 5px white"}}>
            <p style={{color:"#702cc7",fontSize:'21px',marginTop:"-4px",fontWeight:"bold"}}>Add new clinic  <img alt="" src={ IconAddRound} onClick={() => history("/addClinic")} style={{marginLeft:"176px"}}/> </p>  
            </div>
           <div style={{display:"flex",marginTop:'22px'}}>
           <div className='location-profile-bg' >
            <div className='location-card'>
               <img alt='' src={LocationIcon}/>
            </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"25px"}}>
            <h1 className='list-clinic-name'>XYZ Hospital</h1>
            <p  className='list-clinic-address'>HSR layout, hyderabad</p>
            <p  className='list-clinic-country'>India</p>
           <img src={EditIcon} alt='' style={{width:"24px",backgroundColor:"#702cc7",position:"absolute",right: "54px",top: "144px"}}/>
            </div>
            </div>
           </div>
             </div>
          
      
           
       
        

          </>
    )
}
export default  ListOfClinics;