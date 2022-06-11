import React from 'react';
// import { Row,Button} from 'antd';
import '../../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



// import {Input} from 'antd';

// import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
// import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
// import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";
// import IconPrescriptions from "../../assets/myPatientIcons/Prescription.svg";


// import IconCancelGray from "../../../assets/myPatientIcons/IconCancelGray.svg";

// import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";






// import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";


// import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
// import IconSave from "../../assets/icon/IconSave.svg";



import { useNavigate } from 'react-router-dom';
// import FooterSection from "../MyPatientsFolder/FooterSection";






function PatientPrescriptionsFirstSearchItem() {

const history = useNavigate();
 
  


// const [isClick1, setIsClick1] = useState(false)
// const diseaseClick1=()=> {
//     setIsClick1(!isClick1)
// }
// const [isClick2, setIsClick2] = useState(false)

// const [isClick3, setIsClick3] = useState(false)
// const diseaseClick3=()=> {
//     setIsClick3(!isClick3)
// }
// const [isClick4, setIsClick4] = useState(false)
// const diseaseClick4=()=> {
//     setIsClick4(!isClick4)
// }
// const [isClick5, setIsClick5] = useState(false)
// const diseaseClick5=()=> {
//     setIsClick5(!isClick5)
// }
// const [isClick6, setIsClick6] = useState(false)
// const diseaseClick6=()=> {
//     setIsClick6(!isClick6)
// }
// const [isClick7, setIsClick7] = useState(false)
// const diseaseClick7=()=> {
//     setIsClick7(!isClick7)
// }
// const [isClick8, setIsClick8] = useState(false)
// const diseaseClick8=()=> {
//     setIsClick8(!isClick8)
// }
// const [isClick9, setIsClick9] = useState(false)
// const diseaseClick9=()=> {
//     setIsClick9(!isClick9)
// }
// const [isClick10, setIsClick10] = useState(false)
// const diseaseClick10=()=> {
//     setIsClick10(!isClick10)
// }




// const [isClickA1, setIsClickA1] = useState(false)
// const diseaseClickA1=()=> {
//     setIsClickA1(!isClickA1)
// }
// const [isClickA2, setIsClickA2] = useState(false)
// const diseaseClickA2=()=> {
//     setIsClickA2(!isClickA2)
// }
// const [isClickA3, setIsClickA3] = useState(false)
// const diseaseClickA3=()=> {
//     setIsClickA3(!isClickA3)
// }
// const [isClickA4, setIsClickA4] = useState(false)
// const diseaseClickA4=()=> {
//     setIsClickA4(!isClickA4)
// }
// const [isClickA5, setIsClickA5] = useState(false)
// const diseaseClickA5=()=> {
//     setIsClickA5(!isClickA5)
// }

    return (
        <>
      


  

    
      <div style={{marginTop:"20px"}}>
            <h1 className='heading-style-symptoms'>Frequently prescribed drugs</h1>  
         <div style={{marginLeft:"3px",display:"flex",flexWrap:"wrap"}}>
                
                 <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                    
                     <h1  className='diseases-card'>Sompraz L capsule Sr</h1>
                    
                   
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                  
                     <h1  className='diseases-card '>Actapro od tablet Er</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}
                 >
                    
                     <h1  className='diseases-card '>Sompraz 40 tablet</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                     
                     <h1  className='diseases-card '>Colospa X tablet</h1>
                    
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}
                 >
                     
                     <h1  className='diseases-card '>Rifagut 550 tablet</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                    
                     <h1  className='diseases-card '>Pegclear oral solution</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                     
                     <h1  className='diseases-card '>Pruease 2mg tablet</h1>
                   
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                    
                     <h1  className='diseases-card '>Zerodol-Mr-tablet</h1>
                     
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                     
                     <h1  className='diseases-card '>Nexpro 40 tablet</h1>
                    
                    </div>

                    <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                   
                     <h1  className='diseases-card '>Acogut 300 Er tablet Er</h1>
                     
                    </div>

                    
            </div>
            </div>
    

        


         
         
           
      
        

              
         
            
         
        </>

    )
}
export default PatientPrescriptionsFirstSearchItem;