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
import { useNavigate } from "react-router-dom";
import Header from './Header';

function AddClinicDetails() {  
    const history = useNavigate();
    return(
         <>
          <Header />
          <div className='tab-align' >
           <div className='user-profile-bg' >
            <div>
            <div className='add-location-titles'>Address</div>
            <div className='user-details'></div>
            <div>
            <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Name</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
             </div>
           
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Date of birth</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
             </div>
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Doctor licence number</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
             </div>
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Phone Number</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
             </div>
            
             </div>
                <div>
                <div className='add-location-titles'>Working days/hours</div>
                <div className='user-details'></div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Education 1</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MBBS</p>  
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Education 2</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MD</p>     
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Education 3</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>DNB</p>     
                </div>
            
                
                </div> 
                    <div>
                    <div className='add-location-titles'>Locations</div>
                    <div className='user-details'></div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Clinic name</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>erfr</p>  
                    </div>   
                    </div>  
                
                    <div style={{textAlign:"center"}}>
                    <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
                    <Button className='btn next-btn' onClick={() => history("/addClinicSuccess")} >Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
                    </div>

        </div>
        </div>
          

         </>
        

    )
}
export default AddClinicDetails;