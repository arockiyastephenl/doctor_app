import React  from 'react';

import '../../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input } from 'antd';


// import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
// import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
// import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




// import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





// import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
// import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";


// import IconSave from "../../assets/icon/IconSave.svg";
// import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
// import { useNavigate } from 'react-router-dom';
// import FooterSection from "./FooterSection";



const { TextArea } = Input;




// const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };

function PatientAdviceSearch() {

// const history = useNavigate();
 
   




    return (
        <>
         
         
       
          
           
          
             
               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Advice</h1>
                 <TextArea rows={4} 
                              // className='text-area '
                              style={{fontSize:"17px",height:"5rem",borderRadius:"3px",borderWidth:"2px",borderColor:"#E2E3E3"}}
                              placeholder="Search or Add advice" 
                              maxLength={60} />
                
               </div>
              
          

          
        

           

        

           
        

   
        
              
            
         
        </>

    )
}
export default PatientAdviceSearch;