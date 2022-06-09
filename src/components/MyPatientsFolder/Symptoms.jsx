import React, {useState} from 'react';
import { Row,Button} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input,Space } from 'antd';

import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";


import IconCancelGray from "../../assets/myPatientIcons/IconCancelGray.svg";

import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





import SymptomsDiagnosis from "../../assets/myPatientIcons/SymptomsDiagnosis.svg";

import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
import IconSave from "../../assets/icon/IconSave.svg";

import { useNavigate } from 'react-router-dom';
import FooterSection from "../MyPatientsFolder/FooterSection";






function Symptoms() {

const history = useNavigate();
 
const { Search } = Input;
const onSearch = (value) => console.log(value);    


const [isClick1, setIsClick1] = useState(false)
const diseaseClick1=()=> {
    setIsClick1(!isClick1)
}
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


    return (
        <>
         
         
         <div className='head-container'>
         
             <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
              <h1 className='header-title2' style={{top:"4px",marginLeft:"98px"}}>Symptoms & Diagnosis</h1>       
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
                 <img      src={SymptomsDiagnosis}  alt='' style={{width:"22px"}}/>  
                 </div>
               
 
                 </div>
               
        
          </div>
          
           
          <div className='patient-detail-container' style={{height:"43rem"}}>
          <div style={{margintop:"33px"}}>
          <Space direction="vertical">
                <Search
                    placeholder="Search patients name"
                    onSearch={onSearch}
                    className="search-input" />
            </Space>
            </div>

            <div style={{marginTop:"30px"}}>
            <h1 className='heading-style-symptoms'>Frequently seen by you</h1>  
             <div style={{marginLeft:"3px",display:"flex",flexWrap:"wrap"}}>
                
                 <div style={{marginRight:"10px"}} onClick={diseaseClick1}
                 >
                     {!isClick1 ? 
                     <h1  className='diseases-card '>Chest discomfort</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                         Chest discomfort 
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick2}>
                     {!isClick2 ? 
                     <h1  className='diseases-card '>Heartburn</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                       Heartburn
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick3}
                 >
                     {!isClick3 ? 
                     <h1  className='diseases-card '>Constipation</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                         Constipation
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick4}>
                     {!isClick4 ? 
                     <h1  className='diseases-card '>Excessive burping</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Excessive burping
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick5}
                 >
                     {!isClick5 ? 
                     <h1  className='diseases-card '>Palpitations</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                         Palpitations
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick6}>
                     {!isClick6 ? 
                     <h1  className='diseases-card '> Functional dyspepsia</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Functional dyspepsia
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick7}>
                     {!isClick7 ? 
                     <h1  className='diseases-card '> Acute appendicitis</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Acute appendicitis
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick8}>
                     {!isClick8 ? 
                     <h1  className='diseases-card '> Gerd gastro-esophagel reflux disease</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                      Gerd gastro-esophagel reflux disease
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick9}>
                     {!isClick9 ? 
                     <h1  className='diseases-card '> Chronic gastriris</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Chronic gastriris
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    <div style={{marginRight:"10px"}} onClick={diseaseClick10}>
                     {!isClick10 ? 
                     <h1  className='diseases-card '> Gastroenteritis</h1>
                     : 
                     <h1 
                     className='diseases-card-bg-color'>
                     Gastroenteritis
                         <img src={IconCancelGray}  
                         className='cancel-icon'
                         alt='' /></h1>} 
                    </div>

                    
            </div>
            </div>
              


                  
             </div>
        
         <div style={{marginTop:"-29px",marginBottom:'10px', marginLeft:"32px"}}>             
             <Button className='btn save-btn'>Back  <img src={ArrowLeft} alt="" style={{marginLeft:"79px"}} /></Button>
            <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"73px"}}/></Button>  
        
          </div>

              
            <FooterSection />
            
         
        </>

    )
}
export default Symptoms;