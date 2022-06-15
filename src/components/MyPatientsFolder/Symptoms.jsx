import React from 'react';
// import { Row,Button} from 'antd';
import '../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



// import {Input} from 'antd';

import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";


// import IconCancelGray from "../../assets/myPatientIcons/IconCancelGray.svg";

import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





import SymptomsDiagnosis from "../../assets/myPatientIcons/SymptomsDiagnosis.svg";

// import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
// import IconSave from "../../assets/icon/IconSave.svg";

// import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";
import MainHeader from './Headers/Mainheader';
import HeaderSymptoms from './Headers/TitleHeaders/HeaderSymptoms';
import PatientSymptomsSearch from './MainContents/PatientSymptomsSearch';
import PatientSymptomSearchItems from './MainContents/PatientSymptomSearchItems';






function Symptoms() {



    return (
        <>
         
         
       
            <MainHeader/>

              <HeaderSymptoms/>

              <div style={{position:"fixed",zIndex:"3"}} > 
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
                 <img      src={SymptomsDiagnosis}  alt='' style={{width:"22px"}}/>  
                 </div>
               </div>
 
                 </div>
               
        
          
          
           
          <div className='patient-detail-container' style={{height:"43rem"}}>
           <PatientSymptomsSearch/>

         
              <PatientSymptomSearchItems/>


                  
             </div>
        
         
              
            <FooterSection />
            
         
        </>

    )
}
export default Symptoms;