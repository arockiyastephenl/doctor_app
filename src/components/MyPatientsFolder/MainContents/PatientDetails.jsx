import React from 'react';

import '../../../Style.css'


import { useNavigate } from "react-router-dom";



import FooterSection from "../FooterSection";
// import MyPatientsHeader from './Headers/TitleHeaders/MyPatientsHeader';


function PatientDetails() {
    const history = useNavigate();      

    return (
        <>
         
 
          <div>
            <div className='heading'>
                <h1 className='heading-style'> Patients Details</h1>
             </div>
            <div className='patient-container'>
              
            <div  className='patient-card' onClick={() => history("/patientDetailCard")} >
                  
                 

                    <div className='patient-details'  >
                                <p   className='names'>Name</p>
                                   <p  onClick={() => history("/patient-details")} className='description-content '>Cingireddy Narayana Reddy</p>
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
export default PatientDetails;