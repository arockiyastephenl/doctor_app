import React from 'react';
import { Row} from 'antd';
import '../../Style.css'



// import { useNavigate } from "react-router-dom";


function SuperSpecialityCard() {
    // const history = useNavigate();      
    // const [patient, setPatient] = useState(false)
    return (
        <>
         
         <div style={{position:"fixed",zIndex:"3"}} >
             <Row className='special-card'>
                 <div className='special-main'>
                     <div style={{marginLeft:"13px",marginRight:"120px"}}>
                         <h1 className='special-name'> Dr. Pavan Kumar</h1>
                         <p className='special-para'>Super Speciality Center</p>
                     </div>
                     <div className='special-change-card'>Change</div>
                 </div>

             </Row>
           
          </div>
          
         
        

       
       
          
         
        </>

    )
}
export default SuperSpecialityCard;