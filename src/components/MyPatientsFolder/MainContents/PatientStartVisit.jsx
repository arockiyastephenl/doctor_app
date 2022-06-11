import React from 'react';
import { Button} from 'antd';
import '../../../Style.css'









import SymptomsDiagnosis from "../../../assets/myPatientIcons/SymptomsDiagnosis.svg";
import Prescription from "../../../assets/myPatientIcons/Prescription.svg";
import AddAdvices from "../../../assets/myPatientIcons/AddAdvices.svg";
import FollowUp from "../../../assets/myPatientIcons/IconBill.svg";
import AddVitals from "../../../assets/myPatientIcons/AddVitals.svg";
import AddNote from "../../../assets/myPatientIcons/AddNote.svg";
import ReferDoctor from "../../../assets/myPatientIcons/ReferDoctor.svg";
import AddMedicalHistory from "../../../assets/myPatientIcons/AddMedicalHistory.svg";

import IconPushUpdate from "../../../assets/myPatientIcons/IconPushUpdate.svg";
import IconSendRx from "../../../assets/myPatientIcons/IconSendRx.svg";


import { useNavigate } from "react-router-dom";








function PatientStartVisit() {
    const history = useNavigate();     
    // const [patient, setPatient] = useState(false)



    return (
        <>
        
    
          <div >
              <h1 className='consult-name'>Action</h1>
            
            
            <div style={{display:"flex",flexWrap:"wrap",marginBottom:"5px",marginLeft:"5px"}}>
               <div onClick={() => history("/symptoms")} 
                className='patient-cards-with-icon'>
               <img src={SymptomsDiagnosis} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Symptoms & Diagnosis</h1>
            </div>   

                   <div  onClick={() => history("/prescription")} 
                   className='patient-cards-with-icon'>
               <img src={Prescription} alt="" style={{width:"27px",paddingTop:"3px"}}/> 
               <h1 className='startvisit'>Prescription</h1>
                   </div> 

            <div  onClick={() => history("/addAdvicesPage")} 
                   className='patient-cards-with-icon'>
               <img src={AddAdvices} alt="" style={{width:"27px",paddingTop:"8px"}}/> 
               <h1 className='startvisit'>Add advices</h1>
               

                   </div>     
                   


                  

          
                  <div  className='patient-cards-with-icon'>
               <img src={FollowUp } alt="" style={{width:"27px",paddingTop:"11px"}}/> 
               <h1 className='startvisit'>Follow up</h1>
               

                   </div>  

                   <div onClick={() => history("/addVitalsPage")}  
                    className='patient-cards-with-icon'>
                     <img src={AddVitals} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
                       <h1 className='startvisit'>Add vitals</h1>
                   </div>  

                   <div  className='patient-cards-with-icon'>
                   <img src={AddNote} alt="" style={{width:"27px",paddingTop:"16px"}}/> 
                    <h1 className='startvisit'>Add notes</h1>        
                   </div>


                
               <div  className='patient-cards-with-icon'>
               <img src={ReferDoctor} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Refer to doctor</h1>
               

                   </div>   
                   <div  className='patient-cards-with-icon'>
               <img src={AddMedicalHistory} alt="" style={{width:"27px",paddingTop:"32px"}}/> 
               <h1 className='startvisit'>Add medical history</h1>
               

                   </div>  
                  
                   
              </div>

            </div>           
            
        
         <div style={{marginTop:"32px",marginBottom:'9px', marginLeft:"6px",display:'flex'}}>             
             <Button className='btn save-btn'>Push updates  <img src={IconPushUpdate} alt="" style={{marginLeft:"11px"}} /></Button>
            <Button className='btn next-btn'>Send RX <img src={IconSendRx} alt="" style={{marginLeft:"52px"}}/></Button>  
        
          </div>

              
          
            
         
        </>

    )
}
export default PatientStartVisit;