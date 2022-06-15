import React  from 'react';
import {Button,Checkbox} from 'antd';
import '../../../Style.css'

// import BackArrow from "../../assets/icon/BackArrow.svg";
// import MenuDot from "../../assets/icon/MenuDot.svg";



// import {Input } from 'antd';


// import IconNaviHome from "../../assets/myPatientIcons/IconNaviHome.svg";
// import IconNaviConsultation from "../../assets/myPatientIcons/IconNaviConsultation.svg";
// import IconNaviPatientsGray from "../../assets/myPatientIcons/IconNaviPatientsGray.svg";




// import StartVisitGray from "../../assets/myPatientIcons/StartVisitGray.svg";





// import SymptomsDiagnosisGray from "../../assets/myPatientIcons/SymptomsDiagnosisGray.svg";
// import AddAdvices from "../../assets/myPatientIcons/AddAdvices.svg";


import IconSave from "../../../assets/icon/IconSave.svg";
import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import { useNavigate } from 'react-router-dom';
// import FooterSection from "./FooterSection";



// const { TextArea } = Input;




const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function PatientAdvice() {

const history = useNavigate();
 
   




    return (
        <>
         
 
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
             <Button className='btn save-btn ' onClick={() => history("/startVisitPage")}
               style={{marginRight:"10px"}}>
                 Back  
                 <img src={ArrowLeft} alt="" style={{marginLeft:"70px"}} />
              </Button>
            <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"70px"}}/></Button>  
        
          </div>

          
        

          

        

           
        

                  
             
         
        
              
   
            
         
        </>

    )
}
export default PatientAdvice;