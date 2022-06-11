import React from 'react';
import { Button} from 'antd';
import '../../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



// import {Input} from 'antd';

// import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
// import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
// import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";
// import IconPrescriptions from "../../assets/myPatientIcons/Prescription.svg";


// import IconCancelGray from "../../../assets/myPatientIcons/IconCancelGray.svg";

// import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";






// import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";


import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import IconSave from "../../../assets/icon/IconSave.svg";



// import { useNavigate } from 'react-router-dom';







function PatientPrescriptionsSecondSearchItem () {

// const history = useNavigate();
 




    return (
        <>
      


  

      <div style={{marginTop:"20px"}}>
            <h1 className='heading-style-symptoms'>Frequently prescribed Investigations</h1>  
             <div style={{marginLeft:"3px",display:"flex",flexWrap:"wrap"}}>
                
                 <div style={{marginRight:"10px"}} 
                 >
                   
                     <h1  className='diseases-card '>CBC-complete blood count haemoglobin</h1>
                    
                    </div>

                    <div style={{marginRight:"10px"}} >
                   
                     <h1  className='diseases-card '>Upper GI endoscopy</h1>
                    
                    </div>

                    <div style={{marginRight:"10px"}} 
                 >
                    
                     <h1  className='diseases-card '>USG abdomen and pelvis</h1>
                    
                    </div>

                    <div style={{marginRight:"10px"}} >
                     
                     <h1  className='diseases-card '>Electrolytes</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} 
                 >
                    
                     <h1  className='diseases-card '>Stool routine</h1>
                     
                    </div>

                 
            </div>
            </div>
             
                        

          

          <div style={{display:"flex",marginTop:"11px",marginBottom:'0px', marginLeft:"10px"}}>             
             <Button className='btn save-btn '
               style={{marginRight:"10px"}}>
                 Back  
                 <img src={ArrowLeft} alt="" style={{marginLeft:"70px"}} />
              </Button>
            <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"70px"}}/></Button>  
        
          </div>
    

        


         
         
           
      
        

              
         
            
         
        </>

    )
}
export default PatientPrescriptionsSecondSearchItem;