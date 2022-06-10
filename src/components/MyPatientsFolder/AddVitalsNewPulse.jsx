import React  from 'react';
import { Row,Button} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input } from 'antd';
import {CloseOutlined } from "@ant-design/icons";
import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";
import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";
import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
import AddAdvicesGray from "../../assets/myPatientIcons/AddAdvicesGray.svg";
import AddVitals from "../../assets/myPatientIcons/AddVitals.svg";


import IconCancel from "../../assets/myPatientIcons/IconCancel.svg";
import IconSave from "../../assets/icon/IconSave.svg";

import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";







function AddVitalsNewPulse() {

const history = useNavigate();


return (
        <>
         
         
         <div className='head-container'>
         
           <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
         
        
             <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
                <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
           </Row>

          <Row className='name-bg'>
          <h1 className='header-title2' style={{top:"4px",marginLeft:"163px"}}>New Pulse</h1>       
           <img src={MenuDot}  alt='' className='menu-dot'/>      
          </Row>

          <div className='icons' style={{display:"flex"}}>
             <div className='icon-home-container'>
             <img src={IconNaviHome}  alt='' style={{width:"20px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img src={IconNaviConsultation}  alt='' style={{width:"20px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img src={IconNaviPatientsGray}  alt='' style={{width:"20px",fill:"grey"}}/>  
             </div>

             <div className='icon-home-container'>
             <img      src={StartVisitGray}  alt='' style={{width:"17px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"22px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={AddAdvicesGray}  alt='' style={{width:"22px"}}/>  
             </div>

             <div className='icon-home-container'>
             <img      src={AddVitals}  alt='' style={{width:"20px"}}/>  
             </div>
           

             </div>
           
    
      </div>
          
           
          <div className='patient-detail-container' style={{height:"33rem",width:"411px"}}>
         

           <div className='tablet-card' style={{height:"28rem",width:"411px"}}>
               <div style={{marginTop:"10px"}}>
                 <h1 className='tablet-heading'>Blood Pressure</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined style={{width:'17px'}}/>}                                                                                                 
                    className="tablet-input-box"
        />
               </div>
               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Date</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Time</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

             
               <div style={{marginTop:"26px",marginBottom:'14px', marginLeft:"4px",display:"flex"}}>             
                <Button className='btn save-btn'>Cancel  <img src={IconCancel} alt="" style={{marginLeft:"70px"}} /></Button>
                <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"73px"}}/></Button>  
             </div>
          
        

           </div>

           
           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default AddVitalsNewPulse;