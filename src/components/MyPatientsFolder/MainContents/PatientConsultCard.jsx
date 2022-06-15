import React from 'react';

import '../../../Style.css'



import IconMale from "../../../assets/myPatientIcons/IconMale.svg";
import IconAge from "../../../assets/myPatientIcons/IconAge.svg";
import IconMobile from "../../../assets/myPatientIcons/IconMobile.svg";














function PatientConsultCard() {


    // const [patient, setPatient] = useState(false)
    return (
        <>
         
        
          
           
         
             

              <div className='patient-icon-container' >
              <div style={{display:"flex"}}>
                  <div className='male-container'>
                  <img src={IconMale}  alt='' style={{width:"13px"}}/> 
                  <p className='male-text'>Male</p>

                  </div>

                  <div className='male-container'>
                  <img src={IconAge}  alt='' style={{width:"30px"}}/> 
                  <p className='male-text'>36</p>

                  </div>

                  <div  className='male-container'>
                  <img src={IconMobile}  alt='' style={{width:"17px"}}/> 
                  <p className='male-text'>9898981212</p>

                  </div>
                 
                </div>
              
                 
                
                
                
                
         

                    


                  </div>  

       

            

          
         
        </>

    )
}
export default PatientConsultCard;