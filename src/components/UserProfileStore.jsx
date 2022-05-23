import React from 'react';
import { Row} from 'antd';
import { ArrowLeftOutlined} from "@ant-design/icons";
import Backdrop from "../assets/icon/Backdrop.svg";
import DefaultAvatar from "../assets/icon/DefaultAvatar.svg";
import AvatarCamera from "../assets/icon/AvatarCamera.svg";
import { useNavigate } from "react-router-dom";
import {Button } from 'antd';
import IconSave from "../assets/icon/IconSave.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";

import Header from './Header';

function UserProfileStore() {  
    const history = useNavigate();
    return(
         <>
          <Header />
          <div className='tab-align' >
           <div className='user-profile-bg' >
            <div>
            <div className='user-profile-titles'>Profile</div>
            <div className='user-details'></div>
            <div>
            <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Name</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
             </div>
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Phone Number</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
             </div>
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Date of birth</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
             </div>
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Email</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
             </div>
             </div>
                <div>
                <div className='user-profile-titles'>Education details</div>
                <div className='user-details'></div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Education 1</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MBBS</p>  
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Education 2</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MD</p>     
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Education 3</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>DNB</p>     
                </div>
            
                
                </div> 
                    <div>
                    <div className='user-profile-titles'>Professional details</div>
                    <div className='user-details'></div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>clinic name</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>erfr</p>  
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>clinic license number</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>M343</p>     
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Doctor phone number</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>3433</p>     
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Clinic special</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>exexe</p>     
                    </div>
                    
                    </div>  
                    <div>
                        <div className='user-profile-titles'>Home Address</div>
                        <div className='user-details'></div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Address 1</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Address 2</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>City</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>District</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>State</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Country</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Phone number</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                      </div>
                      <div>
                        <div className='user-profile-titles'>Work Address</div>
                        <div className='user-details'></div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Address 1</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Address 2</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>City</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>District</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>State</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Country</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'23px', color:'darkgrey'}}>Phone number</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                      </div>
                      <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
        <Button className='btn next-btn' >Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>


        </div>
        </div>
          

         </>
        

    )
}
export default UserProfileStore;