import React  from 'react';
import { Row,Button,Checkbox} from 'antd';
import '../../Style.css'

import BackArrow from "../../assets/icon/BackArrow.svg";
import MenuDot from "../../assets/icon/MenuDot.svg";



import {Input } from 'antd';


import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";


import IconSave from "../../assets/icon/IconSave.svg";
import ArrowLeft from "../../assets/icon/ArrowLeft.svg";
import { useNavigate } from 'react-router-dom';
import FooterSection from "./FooterSection";



const { TextArea } = Input;




const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function AddAdvicesPage() {

const history = useNavigate();
 
   




    return (
        <>
         
         
         <div className='head-container'>
         
             <Row className='mypatient-heading' onClick={() => history("/startVisitPage")}>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
               </Row>

              <Row className='name-bg'>
              <h1 className='header-title2' style={{top:"4px",marginLeft:"163px"}}>Advices</h1>       
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
                 <img      src={SymptomsDiagnosisGray}  alt='' style={{width:"22px"}}/>  
                 </div>
                 <div className='icon-home-container'>
                 <img      src={AddAdvices}  alt='' style={{width:"22px"}}/>  
                 </div>
               
 
                 </div>
               
        
          </div>
          
           
          <div className='patient-detail-container' style={{height:"43rem"}}>
         
           <div className='tablet-card'  style={{height:"42rem",marginTop:"-7px"}}>
             
               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Advice</h1>
                 <TextArea rows={4} 
                              // className='text-area '
                              style={{fontSize:"17px",height:"5rem",borderRadius:"3px",borderWidth:"2px",borderColor:"#E2E3E3"}}
                              placeholder="Search or Add advice" 
                              maxLength={60} />
                
               </div>
              <div style={{marginTop:"15px",marginBottom:"20px"}}>
                  

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Avoid Spicy Masala and Fried Food</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Cardiology Consultation ECG 2D ECHO</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>High Fibre Diet</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Avoid Coffee Chocolate Smoking</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Abdominal Binder</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Needs Laparoscopic Appendicectomy</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Take Rest</Checkbox>
                    </div>

                    <div style={{marginTop:"15px"}}>
                     <Checkbox className='checkbox' onChange={onChange}>Drink Plenty of Water</Checkbox>
                    </div>
                </div> 
          
          
                <div style={{marginTop:"43px",marginBottom:'0px', marginLeft:"0px",display:'flex'}}>             
             <Button className='btn save-btn '
               style={{marginRight:"10px"}}>
                 Back  
                 <img src={ArrowLeft} alt="" style={{marginLeft:"70px"}} />
              </Button>
            <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"70px"}}/></Button>  
        
          </div>

          
        

           </div>

        

           
        

                  
             </div>
         
        
              
            <FooterSection />
            
         
        </>

    )
}
export default AddAdvicesPage;