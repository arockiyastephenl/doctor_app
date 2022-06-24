import React from 'react';

import '../../Style.css'


// import { useNavigate } from "react-router-dom";

import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNavichangeConsultation from "../../assets/myPatientIcons/IconNavichangeConsultation.svg";

import FooterSection from "../MyPatientsFolder/FooterSection";
// import MyPatientsHeader from './Headers/TitleHeaders/MyPatientsHeader';
import MainHeader from './Headers/Mainheader';
import HeaderMyPatients from './Headers/TitleHeaders/HeaderMyPatients';
import PatientDetails from './MainContents/PatientDetails';

function MyPatients() {
   //  const history = useNavigate();      
    // const [patient, setPatient] = useState(false)
    return (
        <>
         
            <MainHeader/>
            

            <HeaderMyPatients/>
            <div style={{position:"fixed",zIndex:"3"}} > 
              <div className='icons' style={{display:"flex"}}>
                 <div className='icon-home-container'>
                 <img src={IconNaviHome}  alt='' style={{width:"20px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img src={IconNavichangeConsultation }  alt='' style={{width:"20px"}}/>  
                 </div>
               

            
               
              
              </div>
           </div>
          
          <PatientDetails/>
        

        <FooterSection />
       
          
         
        </>

    )
}
export default MyPatients;