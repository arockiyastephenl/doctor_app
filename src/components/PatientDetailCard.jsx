import React, { useState } from 'react';
import { Row,Button} from 'antd';
import '../Style.css'

import BackArrow from "../assets/icon/BackArrow.svg";
import MenuDot from "../assets/icon/MenuDot.svg";


import IconMale from "../assets/myPatientIcons/IconMale.svg";
import IconAge from "../assets/myPatientIcons/IconAge.svg";
import IconMobile from "../assets/myPatientIcons/IconMobile.svg";


import IconNaviHome from "../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatients from "../assets/myPatientIcons/IconNaviPatients.svg";




import StartVisit from "../assets/myPatientIcons/StartVisit.svg";
import StartVideoCall from "../assets/myPatientIcons/StartVideoCall.svg";
import IconPatientDetails from "../assets/myPatientIcons/IconPatientDetails.svg";
import IconBill from "../assets/myPatientIcons/IconBill.svg";
import Queue from "../assets/myPatientIcons/Queue.svg";
import BookSlot from "../assets/myPatientIcons/BookSlot.svg";
import ReferDoctor from "../assets/myPatientIcons/ReferDoctor.svg";
import MedicalRecords from "../assets/myPatientIcons/MedicalRecords.svg";




function PatientDetailCard() {

    const [patient, setPatient] = useState(false)
    return (
        <>
         
         <div className='head-container'>
         
             <Row className='mypatient-heading'>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
              <h1 className='header-title2'  style={{top:"4px"}}>My Patients</h1>       
                                            <img src={MenuDot}  alt='' className='menu-dot'/>      
              </Row>

              <div className='icons' style={{display:"flex"}}>
                 <div className='icon-home-container'>
                 <img src={IconNaviHome}  alt='' style={{width:"26px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img src={IconNaviConsultation}  alt='' style={{width:"26px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img src={IconNaviPatients}  alt='' style={{width:"26px"}}/>  
                 </div>
               

                </div>
               
        
          </div>
          
           
          <div className='patient-detail-container'>
              <div className='patient-name'>
                  <h1 style={{color:"white",fontWeight:"bold"}}>Cingireddy Narayana Reddy</h1>
              </div>

              <div className='patient-icon-container' >
              <div style={{display:"flex"}}>
                  <div className='male-container'>
                  <img src={IconMale}  alt='' style={{width:"17px"}}/> 
                  <p style={{position:"absolute",top:"63px",color:"black"}}>Male</p>

                  </div>

                  <div style={{position:"absolute",right:"152px"}} className='male-container'>
                  <img src={IconAge}  alt='' style={{width:"30px"}}/> 
                  <p style={{position:"absolute",top:"64px",color:"black"}}>36</p>

                  </div>

                  <div style={{position:"absolute",right:"19px"}} className='male-container'>
                  <img src={IconMobile}  alt='' style={{width:"17px"}}/> 
                  <p style={{position:"absolute",top:"64px",color:"black"}}>948859</p>

                  </div>
                 
                </div>
              
                 
                
                
                
                
         

                    


                  </div>  

          <div style={{overflow:"scroll"}}>
            <div style={{display:"flex",marginBottom:"5px",marginLeft:"5px"}}>
               <div  className='patient-cards-with-icon'>
               <img src={StartVisit} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Start Visit</h1>
               

                   </div>   
                   <div  className='patient-cards-with-icon'>
               <img src={StartVideoCall} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Start video Call</h1>
               

                   </div>  
                   <div  className='patient-cards-with-icon'>
               <img src={IconPatientDetails} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>View patient details</h1>
               

                   </div>     
                   


                   </div>

                   <div style={{display:"flex",marginBottom:"5px",marginLeft:"5px"}}>
               <div  className='patient-cards-with-icon'>
               <img src={IconBill } alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Bill patient + add to queue</h1>
               

                   </div>   
                   <div  className='patient-cards-with-icon'>
               <img src={Queue} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add to queue</h1>
               

                   </div>  
                   <div  className='patient-cards-with-icon'>
               <img src={BookSlot} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Book a slot</h1>
               

                   </div>     
                   


                   </div>


                   <div style={{display:"flex",marginBottom:"5px",marginLeft:"5px"}}>
               <div  className='patient-cards-with-icon'>
               <img src={ReferDoctor} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Refer to doctor</h1>
               

                   </div>   
                   <div  className='patient-cards-with-icon'>
               <img src={MedicalRecords} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add medical records</h1>
               

                   </div>  
                  
                   


                   </div>      
                   </div>           
             </div>

             <Button  style={{position:"absolute",left:"11px"}}  className='btn-regular save-btn'>Cancel </Button>
        
         

          
         
        </>

    )
}
export default PatientDetailCard;