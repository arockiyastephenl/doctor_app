import React from 'react';
import { Row,Button} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";


import IconMale from "../../assets/myPatientIcons/IconMale.svg";
import IconAge from "../../assets/myPatientIcons/IconAge.svg";
import IconMobile from "../../assets/myPatientIcons/IconMobile.svg";


import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




import StartVisit from "../../assets/myPatientIcons/StartVisit.svg";


import SymptomsDiagnosis from "../../assets/myPatientIcons/SymptomsDiagnosis.svg";
import Prescription from "../../assets/myPatientIcons/Prescription.svg";
import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";
import FollowUp from "../../assets/myPatientIcons/IconBill.svg";
import AddVitals from "../../assets/myPatientIcons/AddVitals.svg";
import AddNote from "../../assets/myPatientIcons/AddNote.svg";
import ReferDoctor from "../../assets/myPatientIcons/ReferDoctor.svg";
import AddMedicalHistory from "../../assets/myPatientIcons/AddMedicalHistory.svg";

import IconPushUpdate from "../../assets/myPatientIcons/IconPushUpdate.svg";
import IconSendRx from "../../assets/myPatientIcons/IconSendRx.svg";


import { useNavigate } from "react-router-dom";

import FooterSection from "../MyPatientsFolder/FooterSection";






function StartVisitPage() {
    const history = useNavigate();     
    // const [patient, setPatient] = useState(false)



    return (
        <>
         
         <div className='head-container'>
         
             <Row className='mypatient-heading'>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
              <h1 className='header-title2' style={{top:"4px"}}>My Patients</h1>       
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
                 <img      src={StartVisit}  alt='' style={{width:"17px"}}/>  
                 </div>
               
 
                 </div>
               
        
          </div>
          
           
          <div className='patient-detail-container'>
              <div className='patient-name'>
                  <h1 style={{color:"white",fontWeight:"bold"}}>Visit</h1>
              </div>

              <div className='patient-icon-container' >
              <div style={{display:"flex"}}>
                  <div className='male-container'>
                  <img src={IconMale}  alt='' style={{width:"13px"}}/> 
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
               <div onClick={() => history("/symptoms")} 
                className='patient-cards-with-icon'>
               <img src={SymptomsDiagnosis} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Symptoms & Diagnosis</h1>
            </div>   

                   <div  onClick={() => history("/prescription")} 
                   className='patient-cards-with-icon'>
               <img src={Prescription} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Prescription</h1>
                   </div> 

            <div  onClick={() => history("/addAdvicesPage")} 
                   className='patient-cards-with-icon'>
               <img src={AddAdvices} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add advices</h1>
               

                   </div>     
                   


                   </div>

                   <div style={{display:"flex",marginBottom:"5px",marginLeft:"5px"}}>
               <div  className='patient-cards-with-icon'>
               <img src={FollowUp } alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Follow up</h1>
               

                   </div>   
                   <div onClick={() => history("/addVitalsPage")}  
                    className='patient-cards-with-icon'>
               <img src={AddVitals} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add vitals</h1>
               

                   </div>  
                   <div  className='patient-cards-with-icon'>
               <img src={AddNote} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add notes</h1>
               

                   </div>     
                   


                   </div>


                   <div style={{display:"flex",marginBottom:"5px",marginLeft:"5px"}}>
               <div  className='patient-cards-with-icon'>
               <img src={ReferDoctor} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Refer to doctor</h1>
               

                   </div>   
                   <div  className='patient-cards-with-icon'>
               <img src={AddMedicalHistory} alt="" style={{width:"37px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Add medical history</h1>
               

                   </div>  
                  
                   


                   </div>      
                   </div>           
             </div>
        
         <div style={{marginTop:"-28px",marginBottom:'9px', marginLeft:"32px"}}>             
             <Button className='btn save-btn'>Push updates  <img src={IconPushUpdate} alt="" style={{marginLeft:"11px"}} /></Button>
            <Button className='btn next-btn'>Send RX <img src={IconSendRx} alt="" style={{marginLeft:"52px"}}/></Button>  
        
          </div>

              
            <FooterSection />
            
         
        </>

    )
}
export default StartVisitPage;