import React from 'react';
import { Row} from 'antd';
import '../../../../Style.css'


import MenuDot from "../../../../assets/icon/MenuDot.svg";





function HeaderAdvice() {

    return (
        <>
         
          
         <div style={{position:"fixed",zIndex:"3"}} >
              <Row className='name-bg'>
                  <h1 className='header-title2'  style={{top:"4px"}}>Advices</h1>       
               <img src={MenuDot}  alt='' className='menu-dot'/>      
            </Row>
         </div>

            
               
    
         
        

        
       
          
         
        </>

    )
}
export default HeaderAdvice;