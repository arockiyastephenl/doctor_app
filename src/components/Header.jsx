import React from 'react';
import { Row} from 'antd';
// import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";
import DefaultAvatar from "../assets/icon/DefaultAvatar.svg";
import AvatarCamera from "../assets/icon/AvatarCamera.svg";
import BackArrow from "../assets/icon/BackArrow.svg";



function Header() {  
   
    return(
        <div className='container'>
            
         <div className='bg-container1' >
             <img alt="" src={Backdrop}  style={{position:'absolute'}}/>
            <Row className='header-arrow'>
            <img src={BackArrow} alt=''  className='arrow-size'/>
                    <h1 className='header-title'>Add New Clinic</h1>       
            </Row>
            <div className='location-profile-bg' style={{position:"absolute",right:'140px',top:"71px"}}>
            <div className='location-card' style={{position:"absolute",right:'8px',top:"8px"}}>
            <div class="image-upload">
                    <label for="file-input">
                    <img alt="" src= { DefaultAvatar} style={{width:"103px",position:"absolute",left:'-4px',top:"-4px"}} />
                    </label>

                    <input id="file-input" type="file" />
                  </div>
               
            </div>
            </div>
            
            <img alt="" src={ AvatarCamera } className="camera"/>
             </div>
             </div>
        

    )
}
export default Header;