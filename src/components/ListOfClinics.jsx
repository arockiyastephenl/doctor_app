import React from 'react';

import { Row} from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";

import IconAddRound from "../assets/logo/IconAddRound.png";
import { useNavigate } from "react-router-dom";

function ListOfClinics() {  
    const history = useNavigate();


    return(
        <>
      
         <div className='bg-container1'>
             <img alt="" src={Backdrop}  style={{position:'absolute'}}/>
            <Row >
                <ArrowLeftOutlined  style={{position:"absolute",top:'25px',left:"14px",fontSize:'26px',color:"white"}}/>
                    <h1 className='header-title' style={{position:"absolute",top:'12px',left:"53px",fontSize:"30px",color:"white",fontWeight:"bold"}}>List of clinic</h1>       
            </Row>
            <div style={{width:"415px",height:"825px",backgroundColor:"white",position:"absolute",left:"-1px",top:'70px',padding:'12px'}}>
           <div style={{width:"392px",height:"42px",backgroundColor:"white",padding:"9px"}}>
            <p style={{color:"#702cc7",fontSize:'21px',marginTop:"-4px",fontWeight:"bold"}}>Add new clinic  <img alt="" src={ IconAddRound} onClick={() => history("/addClinic")} style={{marginLeft:"196px"}}/> </p>  
            </div>
           </div>
             </div>
          
      
           
       
        

          </>
    )
}
export default  ListOfClinics;