import React from 'react';
import { Row} from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";
import DefaultAvatar from "../assets/icon/DefaultAvatar.svg";
import AvatarCamera from "../assets/icon/AvatarCamera.svg";



function Header() {  
    
    return(
         <div className='container'>
         <div className='bg-container1'>
             <img alt="" src={Backdrop}  style={{position:'absolute'}}/>
            <Row className='header-arrow'>
                <ArrowLeftOutlined className='arrow-size'/>
                    <h1 className='header-title'>Doctor Profile Registration</h1>       
            </Row>
            <img alt="" src= { DefaultAvatar} className="avatar"/>
            <img alt="" src={ AvatarCamera } className="camera"/>
             </div>
             </div>
        

    )
}
export default Header;