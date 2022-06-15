import React from 'react';
// import { Row,Button} from 'antd';
import '../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";


// import IconMale from "../../assets/myPatientIcons/IconMale.svg";
// import IconAge from "../../assets/myPatientIcons/IconAge.svg";
// import IconMobile from "../../assets/myPatientIcons/IconMobile.svg";


import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




import StartVisit from "../../assets/myPatientIcons/StartVisit.svg";


// import SymptomsDiagnosis from "../../assets/myPatientIcons/SymptomsDiagnosis.svg";
// import Prescription from "../../assets/myPatientIcons/Prescription.svg";
// import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";
// import FollowUp from "../../assets/myPatientIcons/IconBill.svg";
// import AddVitals from "../../assets/myPatientIcons/AddVitals.svg";
// import AddNote from "../../assets/myPatientIcons/AddNote.svg";
// import ReferDoctor from "../../assets/myPatientIcons/ReferDoctor.svg";
// import AddMedicalHistory from "../../assets/myPatientIcons/AddMedicalHistory.svg";

// import IconPushUpdate from "../../assets/myPatientIcons/IconPushUpdate.svg";
// import IconSendRx from "../../assets/myPatientIcons/IconSendRx.svg";


// import { useNavigate } from "react-router-dom";

import FooterSection from "../MyPatientsFolder/FooterSection";
import PatientConsultCard from './MainContents/PatientConsultCard';
import PatientStartVisit from './MainContents/PatientStartVisit';
import MainHeader from './Headers/Mainheader';
import HeaderPatientConsult from './Headers/TitleHeaders/HeaderPatientConsult';






function StartVisitPage() {
    // const history = useNavigate();     
    // const [patient, setPatient] = useState(false)



    return (
        <>
         <MainHeader/>
         <HeaderPatientConsult/>
         
         
             

          
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
                 <img      src={StartVisit}  alt='' style={{width:"17px"}}/>  
                 </div>
               
 
                 </div>
              </div>

               
        
        
          
           
          <div className='patient-detail-container'>
              
           <PatientConsultCard/>

          <PatientStartVisit/>        
             </div>
        
        

              
            <FooterSection />
            
         
        </>

    )
}
export default StartVisitPage;