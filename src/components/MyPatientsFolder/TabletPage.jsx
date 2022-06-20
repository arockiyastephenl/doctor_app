import React  from 'react';
// eslint-disable-next-line
import { Row,Button} from 'antd';
import '../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input } from 'antd';
// import {CloseOutlined } from "@ant-design/icons";

import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";

import IconPrescriptions from "../../assets/myPatientIcons/Prescription.svg";
// import IconCancel from "../../assets/myPatientIcons/IconCancel.svg";

import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";




import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";



// import IconSave from "../../assets/icon/IconSave.svg";

import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";
import PatientTabletName from './MainContents/PatientTabletName';
import PatientTabletForm from './MainContents/PatientTabletForm';
import MainHeader from './Headers/Mainheader';
import HeaderPrescriptions from './Headers/TitleHeaders/HeaderPrescriptions';


// eslint-disable-next-line
const { TextArea } = Input;



function TabletPage() {
// eslint-disable-next-line
const history = useNavigate();
 
    




    return (
        <>
         
         
         
         
        <MainHeader/>
        <HeaderPrescriptions/>


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
             <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"24px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={IconPrescriptions}  alt='' style={{width:"19px"}}/>  
             </div>
           

             </div>
           </div>
    
      
          
           
          <div className='patient-detail-container' style={{height:"67rem",width:"411px"}}>
         <PatientTabletName/>
         <PatientTabletForm/>

           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default TabletPage;