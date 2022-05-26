import React from 'react';
import Backdrop from "../assets/icon/Backdrop.svg";

import SuccessIcon from "../assets/icon/SuccessIcon.svg";
import {Button} from 'antd';
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import { useNavigate } from "react-router-dom";

function SuccessPage() {  
    const history = useNavigate();
    return(
         <div className='container'>
         <div className='success-bg-container1'>
             <img alt="" src={Backdrop}  style={{position:'absolute',top:"82px",height:"49rem"}}/>
             <div style={{position:'absolute',top:"177px",right:"49px",textAlign:"center"}} >
             <div className='success-container'>
                 <h1 className='success-text'>Success!</h1>
                 <p className='profile-created'>Your Profile <br/><span style={{color:"#702cc7"}}>Dr.Pravankumar,MBBS,MD.,</span> <br/>has been successfully created</p>
                <img alt='' style={{width:'108px',marginLeft:'107px',marginTop:'23px'}} src={SuccessIcon}/>
                <div style={{textAlign:'center'}}>
                <Button className='success-btn  continue-btn' onClick={() => history("/listOfClinics")}
                style={{position:"absolute",fontSize:"20px"}} >Continue <img src={ IconNextArrow } alt="" style={{width:"26px",position:"absolute",right:"28px",bottom:"18px"}}/></Button>
                 </div>
            </div>
             </div>
             </div>
             </div>
        

    )
}
export default SuccessPage;