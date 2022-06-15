import React  from 'react';
import { Button} from 'antd';
import '../../../Style.css'





import {Input } from 'antd';
import {CloseOutlined } from "@ant-design/icons";


import IconCancel from "../../../assets/myPatientIcons/IconCancel.svg";





import IconSave from "../../../assets/icon/IconSave.svg";





const { TextArea } = Input;



function PatientTabletForm() {


 
    




    return (
        <>
         
         
        
           
        
         

           <div className='tablet-card'>
               
               <div style={{marginTop:"10px"}}>
                 <h1 className='tablet-heading'>Quantity /Dose</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined style={{width:'17px'}}/>}                                                                                                 
                    className="tablet-input-box"
        />
               </div>
               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Dosage Frequency</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Dosage Timing</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Duration</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Start From</h1>
                 <Input
                    type="text"
                     placeholder="1 tablet"
                    suffix={<CloseOutlined />}                                                                                                 
                    className="tablet-input-box"
        />
               </div>

               <div style={{marginTop:"20px"}}>
                 <h1 className='tablet-heading'>Start From</h1>
                 <TextArea rows={4} 
                              // className='text-area '
                              style={{fontSize:"17px",height:"5rem",borderRadius:"3px",borderWidth:"2px",borderColor:"#E2E3E3"}}
                              placeholder="Specific Instructions" 
                              maxLength={60} />
                 {/* <Input
                    type="text"
                     placeholder="1 tablet"
                    style={{height:"8rem"}}                                                                                        
                    className="tablet-input-box"
        /> */}
               </div>
          
          
               <div style={{marginTop:"26px",marginBottom:'14px', marginLeft:"4px",display:"flex"}}>             
                <Button className='btn save-btn'>Cancel  <img src={IconCancel} alt="" style={{marginLeft:"70px"}} /></Button>
                <Button className='btn next-btn'>Save <img src={IconSave} alt="" style={{marginLeft:"73px"}}/></Button>  
             </div>
          
        

           </div>

           <div style={{position: "absolute",bottom: "111px",right: "115px"}}>
           <Button className='btn save-btn'
           style={{backgroundColor:"#C9C9CA",
           width:"12rem",
           color:"black",
           paddingLeft:"38px",
           paddingTop:"6px"}}>Tapering Dose  </Button>
           </div>

           
        

                  

         
        
              
         
            
         
        </>

    )
}
export default PatientTabletForm;