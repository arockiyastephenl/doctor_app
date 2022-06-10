import React  from 'react';
import { Row,Button} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";






import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";
import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";
import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
import AddAdvicesGray from "../../assets/myPatientIcons/AddAdvicesGray.svg";
import AddVitals from "../../assets/myPatientIcons/AddVitals.svg";
import AddVitalsWhite from "../../assets/myPatientIcons/AddVitalsWhite.svg";

import IconAddRound from "../../assets/logo/IconAddRound.png";

import IconSave from "../../assets/icon/IconSave.svg";

import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";


function AddVitalsPage() {

const history = useNavigate();
    return (
        <>
         
         
         <div className='head-container'>
         
             <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
              <h1 className='header-title2' style={{top:"4px",marginLeft:"163px"}}>Add Vitals</h1>       
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
          
           
          <div className='patient-detail-container' style={{height:"61rem"}}>
         
            <div onClick={() => history("/addVitalsNewPulse")}
            className='vitals-card'>
                <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Pulse</h1> 
                <img className='green-add-round' src={IconAddRound } alt=''/>    

              
             
          
              </div>

            <div className='vitals-card'>  
                <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>SpO2</h1> 
                <img className='green-add-round' src={IconAddRound } alt=''/>    
              </div>
  

           <div className='vitals-card'>
           
           <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Blood Pressure</h1> 
           <img className='green-add-round' src={IconAddRound } alt=''/>    

         
        
     
             </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Respiratory Rate</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Temperature</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Height</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Weight</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>BMI</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Systolic BP</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div className='vitals-card'>
               <h1 className='heading-style-symptoms' style={{fontSize:"19px"}}>Diastolic BP</h1> 
                 <img className='green-add-round' src={IconAddRound } alt=''/>    
            </div>

            <div style={{marginTop:"38px",marginBottom:"10px",marginLeft:"7px"}}>
                            <Button   className='btn-regular save-btn'>Add Custom Vitals
                             <img src={ AddVitalsWhite } alt="" 
                             style={{width:"24px",marginLeft:"123px"}} /> </Button>    
                                     
                            <Button style={{marginTop:"20px"}} className='btn-regular report-btn'>Save
                            <img src={ IconSave } alt="" 
                            style={{width:"24px",marginLeft:"250px"}} />
                            </Button>
                          </div>



        

           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default AddVitalsPage;