import React from 'react';
import { Row} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg"

// import { useNavigate } from "react-router-dom";


function MainheaderNamePatientDetail() {
    // const history = useNavigate();      
    // const [patient, setPatient] = useState(false)
    return (
        <>
         
         <div style={{position:"fixed",zIndex:"3"}} >
             <Row className='mypatient-heading' >
                <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
                 <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
             </Row>
          </div>
          
         
        

       
       
          
         
        </>

    )
}
export default MainheaderNamePatientDetail;