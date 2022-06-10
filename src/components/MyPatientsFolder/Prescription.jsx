import React, {useState} from 'react';
import { Row,Button} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input,Space } from 'antd';

import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";
import IconPrescriptions from "../../assets/myPatientIcons/Prescription.svg";


import IconCancelGray from "../../assets/myPatientIcons/IconCancelGray.svg";

import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";






import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";


import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
import IconSave from "../../assets/icon/IconSave.svg";



import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";






function Prescription() {

const history = useNavigate();
 
const { Search } = Input;
const onSearch = (value) => console.log(value);    


// const [isClick1, setIsClick1] = useState(false)
// const diseaseClick1=()=> {
//     setIsClick1(!isClick1)
// }
const [isClick2, setIsClick2] = useState(false)
const diseaseClick2=()=> {
    setIsClick2(!isClick2)
}
const [isClick3, setIsClick3] = useState(false)
const diseaseClick3=()=> {
    setIsClick3(!isClick3)
}
const [isClick4, setIsClick4] = useState(false)
const diseaseClick4=()=> {
    setIsClick4(!isClick4)
}
const [isClick5, setIsClick5] = useState(false)
const diseaseClick5=()=> {
    setIsClick5(!isClick5)
}
const [isClick6, setIsClick6] = useState(false)
const diseaseClick6=()=> {
    setIsClick6(!isClick6)
}
const [isClick7, setIsClick7] = useState(false)
const diseaseClick7=()=> {
    setIsClick7(!isClick7)
}
const [isClick8, setIsClick8] = useState(false)
const diseaseClick8=()=> {
    setIsClick8(!isClick8)
}
const [isClick9, setIsClick9] = useState(false)
const diseaseClick9=()=> {
    setIsClick9(!isClick9)
}
const [isClick10, setIsClick10] = useState(false)
const diseaseClick10=()=> {
    setIsClick10(!isClick10)
}




const [isClickA1, setIsClickA1] = useState(false)
const diseaseClickA1=()=> {
    setIsClickA1(!isClickA1)
}
const [isClickA2, setIsClickA2] = useState(false)
const diseaseClickA2=()=> {
    setIsClickA2(!isClickA2)
}
const [isClickA3, setIsClickA3] = useState(false)
const diseaseClickA3=()=> {
    setIsClickA3(!isClickA3)
}
const [isClickA4, setIsClickA4] = useState(false)
const diseaseClickA4=()=> {
    setIsClickA4(!isClickA4)
}
const [isClickA5, setIsClickA5] = useState(false)
const diseaseClickA5=()=> {
    setIsClickA5(!isClickA5)
}

    return (
        <>
        <div className='head-container'>
         
         <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
         
        
          <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
           <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
           </Row>

          <Row className='name-bg'>
          <h1 className='header-title2' style={{top:"4px",marginLeft:"98px"}}>Drugs & Lab Investigation</h1>       
           <img src={MenuDot}  alt='' className='menu-dot'/>      
          </Row>

          <div className='icons' style={{display:"flex"}}>
             <div className='icon-home-container'>
             <img src={IconNaviHome}  alt='' style={{width:"20px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img src={IconNaviConsultation}  alt='' style={{width:"20px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img src={IconNaviPatientsGray}  alt='' style={{width:"20px",fill:"grey"}}/>  
             </div>

             <div className='icon-home-container'>
             <img      src={StartVisitGray}  alt='' style={{width:"17px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"24px"}}/>  
             </div>
             <div className='icon-home-container'>
             <img      src={IconPrescriptions}  alt='' style={{width:"19px"}}/>  
             </div>
           

             </div>
           
    
      </div>


      <div className='patient-detail-container' style={{height:"57rem"}}>

      <div style={{margintop:"33px",marginTop:"10px"}}>
          <Space direction="vertical">
                <Search
                    placeholder=""
                    onSearch={onSearch}
                    className="search-input" />
            </Space>
            </div>

      <div style={{marginTop:"20px"}}>
            <h1 className='heading-style-symptoms'>Frequently prescribed drugs</h1>  
         <div style={{marginLeft:"3px",display:"flex",flexWrap:"wrap"}}>
                
                 <div style={{marginRight:"10px"}} onClick={() => history("/tabletPage")}>
                    
                     <h1  className='diseases-card'>Sompraz L capsule Sr</h1>
                    
                   
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick2}>
                     {!isClick2 ? 
                     <h1  className='diseases-card '>Actapro od tablet Er</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                       Actapro od tablet Er
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick3}
                 >
                     {!isClick3 ? 
                     <h1  className='diseases-card '>Sompraz 40 tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                        Sompraz 40 tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick4}>
                     {!isClick4 ? 
                     <h1  className='diseases-card '>Colospa X tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Colospa X tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick5}
                 >
                     {!isClick5 ? 
                     <h1  className='diseases-card '>Rifagut 550 tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                        Rifagut 550 tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick6}>
                     {!isClick6 ? 
                     <h1  className='diseases-card '>Pegclear oral solution</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Pegclear oral solution
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick7}>
                     {!isClick7 ? 
                     <h1  className='diseases-card '>Pruease 2mg tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Pruease 2mg tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick8}>
                     {!isClick8 ? 
                     <h1  className='diseases-card '>Zerodol-Mr-tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Zerodol-Mr-tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick9}>
                     {!isClick9 ? 
                     <h1  className='diseases-card '>Nexpro 40 tablet</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                    Nexpro 40 tablet
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick10}>
                     {!isClick10 ? 
                     <h1  className='diseases-card '>Acogut 300 Er tablet Er</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Acogut 300 Er tablet Er
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    
            </div>
            </div>
      <div style={{marginTop:"20px"}}>
            <h1 className='heading-style-symptoms'>Frequently prescribed Investigations</h1>  
             <div style={{marginLeft:"3px",display:"flex",flexWrap:"wrap"}}>
                
                 <div style={{marginRight:"10px"}} onClick={diseaseClickA1}
                 >
                     {!isClickA1 ? 
                     <h1  className='diseases-card '>CBC-complete blood count haemoglobin</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                        CBC-complete blood count haemoglobin
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClickA2}>
                     {!isClickA2 ? 
                     <h1  className='diseases-card '>Upper GI endoscopy</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Upper GI endoscopy
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClickA3}
                 >
                     {!isClickA3 ? 
                     <h1  className='diseases-card '>USG abdomen and pelvis</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                         USG abdomen and pelvis
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClickA4}>
                     {!isClickA4 ? 
                     <h1  className='diseases-card '>Electrolytes</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Electrolytes
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClickA5}
                 >
                     {!isClickA5 ? 
                     <h1  className='diseases-card '>Stool routine</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                        Stool routine
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                 
            </div>
            </div>
             
                        

          </div>

          <div style={{marginTop:"-31px",marginBottom:'0px', marginLeft:"28px"}}>             
             <Button className='btn save-btn '
               style={{marginRight:"10px"}}>
                 Back  
                 <img src={ArrowLeft} alt="" style={{marginLeft:"70px"}} />
              </Button>
            <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"70px"}}/></Button>  
        
          </div>


      <FooterSection />
         
         
           
      
        

              
         
            
         
        </>

    )
}
export default Prescription;