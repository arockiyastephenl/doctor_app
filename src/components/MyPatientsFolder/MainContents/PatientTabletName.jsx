import React  from 'react';

import '../../../Style.css'










import IconSave from "../../../assets/icon/IconSave.svg";









function PatientTabletName() {

    




    return (
        <>
         
         
      
          
           
    
          <div style={{margintop:"33px"}}>
              <div style={{ 
                  width:'380px',
                  height:"70px", 
                  backgroundColor:"white",
                  marginTop:"7px",
                  marginBottom:"7px",
                  borderRadius:"4px",
                  paddingTop:"8px",
                  padding:"13px",
                  display:"flex",
                  justifyContent:"space-between"}}>
                <h1 className='heading-style-symptoms' style={{fontSize:"22px"}}>Paracetamol 500 mg</h1> 
                <img style={{width:"27px"}} src={IconSave} alt=''/>    

              </div>
            </div>

         
           

           
        

                  
     
         
        
              
       
            
         
        </>

    )
}
export default PatientTabletName;