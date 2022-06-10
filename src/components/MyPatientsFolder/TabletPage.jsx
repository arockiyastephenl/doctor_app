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

import IconPrescriptions from "../../assets/myPatientIcons/Prescription.svg";
import IconCancel from "../../assets/myPatientIcons/IconCancel.svg";

import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";




import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";



import IconSave from "../../assets/icon/IconSave.svg";

import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";



const { TextArea } = Input;



function TabletPage() {

const history = useNavigate();
 
    




    return (
        <>
         
         
         <div className='head-container'>
         
         <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
         
        
          <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
           <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
           </Row>

          <Row className='name-bg'>
          <h1 className='header-title2' style={{top:"4px",marginLeft:"98px"}}>Drugs & Lab Investigation</h1>       
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
             <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"24px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={IconPrescriptions}  alt='' style={{width:"19px"}}/>  
             </div>
           

             </div>
           
    
      </div>
          
           
          <div className='patient-detail-container' style={{height:"67rem",width:"411px"}}>
          <div style={{margintop:"33px"}}>
              <div style={{ 
                  width:'380px',
                  height:"70px", 
                  backgroundColor:"white",
                  marginTop:"7px",
                  marginBottom:"7px",
                  borderRadius:"4px",
                  paddingTop:"8px",
                  padding:"13px",
                  display:"flex",
                  justifyContent:"space-between"}}>
                <h1 className='heading-style-symptoms' style={{fontSize:"22px"}}>Paracetamol 500 mg</h1> 
                <img style={{width:"27px"}} src={IconSave} alt=''/>    

              </div>
            </div>

           <div className='tablet-card'>
               <div style={{marginTop:"10px"}}>
                 <h1 className='tablet-heading'>Quantity /Dose</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined style={{width:'17px'}}/>}                                                                                                 
                    className="tablet-input-box"
        />
               </div>
               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Dosage Frequency</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Dosage Timing</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Duration</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Start From</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Start From</h1>
                 <TextArea rows={4} 
                              // className='text-area '
                              style={{fontSize:"17px",height:"5rem",borderRadius:"3px",borderWidth:"2px",borderColor:"#E2E3E3"}}
                              placeholder="Specific Instructions" 
                              maxLength={60} />
                 {/* <Input
                    type="text"
                     placeholder="1 tablet"
                    style={{height:"8rem"}}                                                                                        
                    className="tablet-input-box"
        /> */}
               </div>
          
          
               <div style={{marginTop:"26px",marginBottom:'14px', marginLeft:"4px",display:"flex"}}>             
                <Button className='btn save-btn'>Cancel  <img src={IconCancel} alt="" style={{marginLeft:"70px"}} /></Button>
                <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"73px"}}/></Button>  
             </div>
          
        

           </div>

           <div style={{position: "absolute",bottom: "111px",right: "115px"}}>
           <Button className='btn save-btn'
           style={{backgroundColor:"#C9C9CA",
           width:"12rem",
           color:"black",
           paddingLeft:"38px",
           paddingTop:"6px"}}>Tapering Dose  </Button>
           </div>

           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default TabletPage;