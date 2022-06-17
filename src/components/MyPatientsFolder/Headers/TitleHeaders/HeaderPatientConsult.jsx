import React from 'react';
import { Row} from 'antd';
import '../../../../Style.css'


import MenuDot from "../../../../assets/icon/MenuDot.svg";

import {useNavigate} from 'react-router-dom'



function HeaderPatientConsult() {
    const history = useNavigate()

    return (
        <>
         
          
         <div style={{position:"fixed",zIndex:"3"}} >
              <Row onClick={() => history('/mainPageNamePatientDetails')} 
              className='name-bg'>
                  <h1 className='header-title2'  style={{top:"4px"}}>Cingireddy Narayana Reddy</h1>       
               <img src={MenuDot}  alt='' className='menu-dot'/>      
            </Row>
         </div>

            
               
    
         
        

        
       
          
         
        </>

    )
}
export default HeaderPatientConsult;