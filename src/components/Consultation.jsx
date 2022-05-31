import React from 'react';
import { Row,Col} from 'antd';

import BackArrow from "../assets/icon/BackArrow.svg";

function Consultation() {
    return (
        <>
           <div className='container'>
           <div className='bg-container1' >
             <Row style={{width:"389px",height:"37px",backgroundColor:" black",display:"flex",position:'absolute'}}>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Wellyfe</h1>       
             
             </Row>
           
            <p className='consult-text'>Consultation</p>
            <Row style={{width:"389px",height:"147px",backgroundColor:"transparent",display:"flex",position:'absolute',top:"76px"}}>
              <Row className='consult-icon-container'>
                  <Col className='consult-page-round-bg'>

                  </Col>
                  <Col className='consult-page-round-bg'>
                  </Col>
                  <Col className='consult-page-round-bg'>
                  </Col>
                  <Col className='consult-page-round-bg'>
                  </Col> 
                  <Col className='consult-page-round-bg'>
                  </Col>

              </Row>
              
              <Row className='consult-number-container'>
                  <Col className='consult-page-number'>

                  </Col>
                  
                
              </Row>
              
               </Row>
        

            {/* <Row style={{width:"389px",height:"37px",backgroundColor:" black",display:"flex",position:'absolute',top:"52px"}}>
            </Row> */}
            
             </div>
         </div>
        </>
    )
}
export default Consultation;