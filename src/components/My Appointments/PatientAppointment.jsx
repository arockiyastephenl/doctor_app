import React from 'react';
// import { Row} from 'antd';
import '../../Style.css'

// import BackArrow from "../../../assets/icon/BackArrow.svg"
import HeaderMyAppoint from './HeaderMyAppoint';
import MainheaderMyAppoint from './MainheaderMyAppoint';
import SuperSpecialityCard from './SuperSpecialityCard';
import TabMyAppoint from './TabMyAppoint';

// import { useNavigate } from "react-router-dom";


function PatientAppointment() {
    // const history = useNavigate();      
    // const [patient, setPatient] = useState(false)
    return (
        <>
       <MainheaderMyAppoint/>  
       <HeaderMyAppoint/>
       
         <div className='myappoint-special-card'>
             <SuperSpecialityCard/>

            
             <TabMyAppoint/>


         </div>
        

       
       
          
         
        </>

    )
}
export default PatientAppointment;