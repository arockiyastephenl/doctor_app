import React from 'react';
import { Button} from 'antd';
import '../../../Style.css'











import StartVisit from "../../../assets/myPatientIcons/StartVisit.svg";
import StartVideoCall from "../../../assets/myPatientIcons/StartVideoCall.svg";
import IconPatientDetails from "../../../assets/myPatientIcons/IconPatientDetails.svg";
import IconBill from "../../../assets/myPatientIcons/IconBill.svg";
import Queue from "../../../assets/myPatientIcons/Queue.svg";
import BookSlot from "../../../assets/myPatientIcons/BookSlot.svg";
import ReferDoctor from "../../../assets/myPatientIcons/ReferDoctor.svg";
import MedicalRecords from "../../../assets/myPatientIcons/MedicalRecords.svg";

import IconCancel from "../../../assets/myPatientIcons/IconCancel.svg";


import { useNavigate } from 'react-router-dom';




function PatientConsult() {
    const history = useNavigate();

    // const [patient, setPatient] = useState(false)
    return (
        <>
         
        
          
           

              

           

          <div >
              <h1 className='consult-name'>Consulting</h1>
            <div style={{display:"flex",flexWrap:"wrap",marginBottom:"5px",marginLeft:"5px"}}>
             
               <div  onClick={() => history("/startVisitPage")}
               className='patient-cards-with-icon'>
               <img src={StartVisit} alt="" style={{width:"27px",paddingTop:"21px"}}/> 
               <h1 className='startvisit'>Start Visit</h1>
               

                   </div>  

                   <div  className='patient-cards-with-icon'>
               <img src={StartVideoCall} alt="" style={{width:"27px",paddingTop:"45px"}}/> 
               <h1 className='startvisit'>Start video Call</h1>
               

                   </div>  

                   <div  className='patient-cards-with-icon'>
               <img src={IconPatientDetails} alt="" style={{width:"27px",paddingTop:"25px"}}/> 
               <h1 className='startvisit'>View patient details</h1>
               

                   </div>    

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
            

             <Button  style={{left:"7px",bottom:'-36px'}}  className='btn-regular save-btn'>Cancel 
             <img src={ IconCancel } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
             </Button>
            
             
          
         
        </>

    )
}
export default PatientConsult;