import React from 'react';
import { Row} from 'antd';
import '../Style.css'

import BackArrow from "../assets/icon/BackArrow.svg";
import MenuDot from "../assets/icon/MenuDot.svg";
import { useNavigate } from "react-router-dom";

import IconNaviHome from "../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../assets/myPatientIcons/IconNaviConsultation.svg";

import FooterSection from './FooterSection';

function MyPatients() {
    const history = useNavigate();      
    // const [patient, setPatient] = useState(false)
    return (
        <>
         
         <div style={{position:"fixed",zIndex:"3"}} >
             <Row className='mypatient-heading'>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
                  <h1 className='header-title2'  style={{top:"4px"}}>My Patients</h1>       
               <img src={MenuDot}  alt='' className='menu-dot'/>      
            </Row>

              <div className='icons' style={{display:"flex"}}>
                 <div className='icon-home-container'>
                 <img src={IconNaviHome}  alt='' style={{width:"20px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img src={IconNaviConsultation}  alt='' style={{width:"20px"}}/>  
                 </div>
               

                </div>
               
              
          </div>
          
          <div>
            <div className='heading'>
                <h1 className='heading-style'> Patients Details</h1>
             </div>
            <div className='patient-container'>
              
            <div  className='patient-card' onClick={() => history("/patientDetailCard")} >
                  
                 

                    <div className='patient-details'  >
                                <p   className='names'>Name</p>
                                   <p  className='description-content '>Cingireddy Narayana Reddy</p>
                    </div>

                    <div className='patient-details'>
                                <p   className='names'>Gender</p>
                                   <p  className='description-content '>Male</p>
                    </div>

                    <div className='patient-details'>
                                <p   className='names'>Age</p>
                                   <p  className='description-content '>43</p>
                    </div>

                    <div className='patient-details'>
                                <p   className='names'>Mobile no.</p>
                                   <p  className='description-content '>1234454</p>
                    </div>


                    

                               

                </div>

             <div className='patient-card'  onClick={() => history("/patientDetailCard")}>
                  <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='description-content '>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Gender</p>
                                 <p  className='description-content '>Male</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='description-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='description-content '>1234454</p>
                  </div>


                  

                             

                 </div>

             <div className='patient-card'  onClick={() => history("/patientDetailCard")}>
                  <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='description-content '>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Gender</p>
                                 <p  className='description-content '>Male</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='description-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='description-content '>1234454</p>
                  </div>


                  

                             

                 </div>

            <div className='patient-card'  onClick={() => history("/patientDetailCard")}>
                   <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='description-content '>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Gender</p>
                                 <p  className='description-content '>Male</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='description-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='description-content '>1234454</p>
                  </div>


                  

                             

                 </div>    
          <div className='patient-card'  onClick={() => history("/patientDetailCard")}>
                  <div className='patient-details'>
                              <p   className='names'>Name</p>
                                 <p  className='description-content '>Cingireddy Narayana Reddy</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Gender</p>
                                 <p  className='description-content '>Male</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Age</p>
                                 <p  className='description-content '>43</p>
                  </div>

                  <div className='patient-details'>
                              <p   className='names'>Mobile no.</p>
                                 <p  className='description-content '>1234454</p>
                  </div>
                 </div>

               </div>

           
          </div>
        

        <FooterSection />
       
          
         
        </>

    )
}
export default MyPatients;