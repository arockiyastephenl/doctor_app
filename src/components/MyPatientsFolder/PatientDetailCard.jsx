import React from 'react';
// import { Row} from 'antd';
import '../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";





import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatients from "../../assets/myPatientIcons/IconNaviPatients.svg";









// import { useNavigate } from 'react-router-dom';


import FooterSection from "../MyPatientsFolder/FooterSection";
import PatientConsult from './MainContents/PatientConsult';
import MainHeader from './Headers/Mainheader';
import HeaderPatientConsult from './Headers/TitleHeaders/HeaderPatientConsult';
import PatientConsultCard from './MainContents/PatientConsultCard';

function PatientDetailCard() {
    // const history = useNavigate();

    // const [patient, setPatient] = useState(false)
    return (
        <>
            <MainHeader />
            

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
                 <img      src={IconNaviPatients}  alt='' style={{width:"20px"}}/>  
                 </div>
               
 
                 </div>
                 </div>
               
        
        
                 <div className='patient-detail-container'>
              <PatientConsultCard/>
              <PatientConsult/>
            </div>
             <FooterSection />

          
         
        </>

    )
}
export default PatientDetailCard;