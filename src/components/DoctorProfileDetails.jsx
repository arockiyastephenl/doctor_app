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

function DoctorProfileDetails() {  
    const history = useNavigate();
    return(
         <>
          <Header style={{zIndex:"2",top:"2px",position:"fixed"}}/>
          <div className='tab-align' style={{position:"absolute",top:"352px",zIndex:"0"}} >
           <div className='user-profile-bg' >
           <div style={{height:'146rem'}}>
            <div style={{backgroundColor:"white"}}>
            <div className='user-profile-titles'>Profile</div>
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
             <div>
             <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Email</h1>
             <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
             </div>
             </div>
                <div>
                <div className='user-profile-titles'>Education details</div>
                <div className='user-details'></div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>University/College</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MBBS</p>  
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Studies</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>MD</p>     
                </div>
                <div>
                <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>City</h1>
                <p  style={{fontSize:"15px", marginLeft:'25px'}}>DNB</p>     
                </div>
            
                
                </div> 
                    <div>
                    <div className='user-profile-titles'>Work History details</div>
                    <div className='user-details'></div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Clinic name</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>erfr</p>  
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Clinic address</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>M343</p>     
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Clinic phone number</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>3433</p>     
                    </div>
                    <div>
                    <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Notes</h1>
                    <p  style={{fontSize:"15px", marginLeft:'25px'}}>exexe</p>     
                    </div>
                    
                    </div>  
                    <div>
                        <div className='user-profile-titles'>Home Address</div>
                        <div className='user-details'></div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Address 1</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Address 2</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>City</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>District</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>State</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Country</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Phone number</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                      </div>
                      <div>
                        <div className='user-profile-titles'>Work Address</div>
                        <div className='user-details'></div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Address 1</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>Ravikumar</p>  
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Address 2</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>9383744</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>City</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>12/12/1999</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>District</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>State</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Country</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                        <div>
                        <h1 style={{fontSize:"16px", marginLeft:'25px',marginTop:'0px', color:'darkgrey'}}>Phone number</h1>
                        <p  style={{fontSize:"15px", marginLeft:'25px'}}>xyz@gmail.com</p>     
                        </div>
                      </div>
                    <div style={{textAlign:"center"}}>
                    <Button className='btn save-btn'>Save  <img src={ IconSave } alt="" style={{marginLeft:"80px"}} /></Button>
                    <Button className='btn next-btn' onClick={() => history("/successPage")} >Next <img src={ IconNextArrow } alt="" style={{marginLeft:"80px"}}/></Button>
                    </div>
                    </div>
        </div>
        </div>
          

         </>
        

    )
}
export default DoctorProfileDetails;