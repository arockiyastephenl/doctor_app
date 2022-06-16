import React from 'react';

import '../../Style.css';
import BackArrow from "../../assets/icon/BackArrow.svg"







function NameCard() {

    return (
        <>
         
          
    
         <div style={{position:"fixed",zIndex:"3"}} >
             <div className='name-patient-container'>
          
                <div style={{display:"flex",marginTop:'4px',marginLeft:"5px"}}>
                <img src={BackArrow} alt=''  style={{marginRight:'6px',marginLeft:"7px"}}/>
                    <h1 className='name-details-head'>Patient Details</h1>
                    <img src={BackArrow} alt='' style={{marginLeft:'234px'}} />
                </div>
                <hr/>
                <div style={{padding:'3px',marginLeft:"5px"}}>
                    <h1 className='name-details'>Cingireddy Narayana Reddy</h1>
                    <div style={{display:"flex"}}>
                        <p className='person-info'>Age: <span style={{color:"black"}}>36</span></p>
                        <p className='person-info'>Gender: <span style={{color:"black"}}>Male</span></p>
                        <p className='person-info'>Ph: <span style={{color:"black"}}>1234554321</span></p>
                    </div>
                </div>

             </div>
          </div>
    
         
        

        
       
          
         
        </>

    )
}
export default NameCard;