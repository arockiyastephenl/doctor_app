import React  from 'react';
import { Row,Button,Checkbox} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input } from 'antd';


import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";


import IconSave from "../../assets/icon/IconSave.svg";
import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
import { useNavigate } from 'react-router-dom';
import FooterSection from "./FooterSection";
import PatientAdvice from './MainContents/PatientAdvice';
import PatientAdviceSearch from './MainContents/PatientAdviceSearch';
import HeaderAdvice from './Headers/TitleHeaders/HeaderAdvice';
import MainHeader from './Headers/Mainheader';



const { TextArea } = Input;




const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function AddAdvicesPage() {

const history = useNavigate();
 
   




    return (
        <>
         
           <MainHeader/>
           <HeaderAdvice/>

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
                 <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"22px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img      src={AddAdvices}  alt='' style={{width:"22px"}}/>  
                 </div>
               
 
                 </div>
               </div>
        
    
          
           
          <div className='patient-detail-container' style={{height:"43rem"}}>
         
           <div className='tablet-card'  style={{height:"42rem",marginTop:"-7px"}}>
             
              <PatientAdviceSearch/>
           <PatientAdvice/>

          
        

           </div>

        

           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default AddAdvicesPage;