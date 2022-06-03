import React,{useState} from 'react';
import { Row,Button,} from 'antd';

import BackArrow from "../assets/icon/BackArrow.svg";
import MenuDot from "../assets/icon/MenuDot.svg";



import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import IconSave from "../assets/icon/IconSave.svg";
import ArrowLeft from "../assets/icon/ArrowLeft.svg";
import IconHistory from "../assets/icon/IconHistory.svg";
import IconPrescriptions from "../assets/icon/IconPrescriptions.svg";
import IconDiagnostics from "../assets/icon/IconDiagnostics.svg";
import IconReference from "../assets/icon/IconReference.svg";

import IconImportPrescription from "../assets/icon/IconImportPrescription.svg";
import Checkbox from "../assets/icon/Checkbox.svg";
import IconAddRound from "../assets/logo/IconAddRound.png";

import 'react-tabs/style/react-tabs.css'
// import 'react-tabs/style/react-tabs.css';








function PersonProfile() {  
    // const history = useNavigate();
   
  const [toggled,toggle] = useState(false)
  const [prescriptionTab,setPrescriptionTab] = useState(false)
  
  const [diagnosisTab,setDiagnosisTab] = useState(false)
  
 

  

    return(
        <>
         <div className='container'>
           <div className='bg-container1' >
             <Row className='backdrop-container'>
             
            
              <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
               <h1 className='header-title'  style={{top:"4px"}}>Wellyfe</h1>       
            
                    <img src={MenuDot} alt='' className='menu-dot'/>
            
             </Row>
           
          

            
              <Row 
               className='person-backdrop-icon-container'>
              
               <Tabs o className='consult-icon-container'>
                   <TabList style={{display:"contents"}}>
                   
                   <Tab className='person-profile-page-round-bg'>
                   
                       <img src={IconHistory} alt='' className='icons' />
                       <p className='icon-headings '>History</p>
                    
                  </Tab>
                       
                       
                  <Tab className='person-profile-page-round-bg'>
                       <img src={IconPrescriptions} alt='' className='icons' />
                       <p className='icon-headings '>Prescription</p>
                  </Tab>
            
                  <Tab className='person-profile-page-round-bg'>
                       <img src={IconDiagnostics} alt='' className='icons' />
                       <p className='icon-headings '>Diagnostics</p>
                  </Tab>
                  <Tab className='person-profile-page-round-bg'>
                       <img src={IconReference} alt='' className='icons' />
                       <p className='icon-headings '>References</p>
                  </Tab>
                 
                 
                      </TabList> 
                  
                 
              
                      <div className='' >
                  
                        </div>
                    <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
                      <div className='history-page'>
                          <div className='history-container'>
                              <h1>History</h1>
                          </div>
                      
                          <div className='history-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Prescriptions</p>
                                    <p className='prescription-content'>Prescriptions details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Diagnotics</p>
                                    <p  className='prescription-content'>Diagnotics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  className='prescriptions' >Notes</p>
                                   <p  className='prescription-content'>Notes details</p>
                               </div>
                          </div>
                          <div style={{marginLeft:"15px",marginTop:"25px",marginBottom:"5px"}}>
                              <h1 style={{fontSize:"16px"}}>Notes</h1>
                          </div>
                           <div style={{marginTop:"38px",marginBottom:"5px",marginLeft:"15px"}}>
                            <Button   className='btn-regular save-btn'>Save 
                             <img src={ IconSave } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} /> </Button>    
                                     
                            <Button style={{marginTop:"20px"}} className='btn-regular report-btn'>Back to Consultation
                            <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                          </div>
                      </div>
                      </TabPanel>

                     <TabPanel>
                  <div className='person-profile-tab-align' >
                   <div className='person-nontab'>
                   <div style={{Position:"absolute",top:"4px",left:"3px"}} className='history-page'>
             
                     <div onClick={() => setPrescriptionTab(prescriptionTab=> !prescriptionTab)}
                             style={{position:'absolute',top:"-57px"}}  
                            className='prescription-tab'>
                               <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                              New Prescription
                    </div>
                     <div style={{position:'absolute',top:"-57px",left:"184px"}} 
                         className='prescription-tab'>Prefered Pharmacies
                    </div>
                  
                          



                         <div>
                          <div className='history-container'>
                              <h1>History</h1>
                          </div>
                      
                          <div className='history-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Prescriptions</p>
                                    <p className='prescription-content'>Prescriptions details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Diagnotics</p>
                                    <p  className='prescription-content'>Diagnotics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  className='prescriptions' >Notes</p>
                                   <p  className='prescription-content'>Notes details</p>
                               </div>
                          </div>
                         
                           <div style={{marginTop:"38px",marginBottom:"5px",marginLeft:"15px"}}>          
                            <Button style={{marginTop:"20px"}} className='btn-regular report-btn'>Back to Consultation
                            <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                          </div>
                          </div>
                       
               

                     </div>

                       {/* tab-pages */}
                           {prescriptionTab && 
                                 <div className='prescription-tab-page'>
                                      <div className='history-container'>
                              <h1>Prescriptions</h1>
                                </div>
                          <div className='Prescription-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Prescriptions</p>
                                    <p className='prescription-content'>Prescriptions details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Diagnotics</p>
                                    <p  className='prescription-content'>Diagnotics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  className='prescriptions' >Notes</p>
                                   <p  className='prescription-content'>Notes details</p>
                               </div>
                               <Button style={{marginTop:"12px",marginLeft:"3px"}} className='btn-import-prescription'>Import Prescriptions
                            <img src={IconImportPrescription } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                               
                          </div>
                            
                          <div className='history-container'>
                              <h1>Prescriptions</h1>
                                </div>
                          <div className='Prescription-content'>
                             
                              <h1>Medicine Name</h1>
                             <div style={{display:"flex"}}>
                                 
                              <div style={{display:"flex", marginRight:'61px'}}>
                                  <img style={{width:"23px"}} src={Checkbox} alt=''/>
                                  <p style={{fontSize:"17px",paddingLeft:"12px",paddingTop:"17px"}}>Morning</p>
                              </div>
                              <div style={{display:"flex"}}>
                                  <img style={{width:"23px"}} src={Checkbox} alt=''/>
                                  <p style={{fontSize:"17px",paddingLeft:"12px",paddingTop:"17px"}}>Afternoon</p>
                              </div>

                              </div>

                              <div style={{display:"flex"}}>
                                 
                              <div style={{display:"flex", marginRight:'61px'}}>
                                  <img style={{width:"23px"}} src={Checkbox} alt=''/>
                                  <p style={{fontSize:"17px",paddingLeft:"12px",paddingTop:"17px"}}>Evening</p>
                              </div>
                              <div style={{display:"flex"}}>
                                  <img style={{width:"23px"}} src={Checkbox} alt=''/>
                                  <p style={{fontSize:"17px",paddingLeft:"12px",paddingTop:"17px"}}>When required</p>
                              </div>

                              </div>
                         <div 
                         style={{
                           textAlign:"center",
                           fontSize:"15px",
                           width:'5rem',
                           height:"2rem",
                           backgroundColor:"lightgray",
                           paddingTop:'4px',
                            borderRadius:"5px",
                            marginTop:'10px',
                            marginBottom:'15px'
                            }}>
                              Dosage
                            </div>
                            
                            <p style={{color:"black" }}>  
                              <img alt="" src={ IconAddRound} 
                                style={{marginRight:"10px"}}
                                /> 
                                Add Row
                              </p>  
                               <Button style={{marginTop:"12px",marginLeft:"3px"}} className='btn-import-prescription'>Save
                            <img src={ IconSave  } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"14px"}} />
                            </Button>
                               
                          </div>
                                      
                                </div>
                               }   
                         </div>
                        </div>
                      </TabPanel>

                     <TabPanel >
                   <div className='person-profile-tab-align' >
                   <div className='person-nontab'>
                   <div style={{Position:"absolute",top:"4px",left:"3px"}} className='history-page'>
             
                     <div onClick={() => setDiagnosisTab(diagnosisTab=> !diagnosisTab)}
                             style={{position:'absolute',top:"-57px",left: '90px'}}  
                            className='prescription-tab'>New Diagnostics
                    </div>
                    
                  
                          


        
                         <div>
                          <div className='history-container'>
                              <h1>History</h1>
                          </div>
                    
                          <div className='diagnostic-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                             
                          </div>
                          <hr style={{width:"22rem",backgroundColor:"darkgay",marginTop:"0px",marginBottom:"1px"}} />
                          <div className='diagnostic-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                             
                          </div>
                         
                           <div style={{marginTop:"38px",marginBottom:"5px",marginLeft:"15px"}}>          
                            <Button style={{marginTop:"20px"}} className='btn-regular report-btn'>Back to Consultation
                            <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                          </div>
                          </div>
                       
               

                     </div>

                       {/* tab-pages */}
                           {diagnosisTab && 
                                 <div className='diagnostics-tab-page '>
                                      
                                      <div className='history-container'>
                              <h1>History</h1>
                          </div>
                    
                          <div className='diagnostic-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                             
                          </div>
                          <hr style={{width:"22rem",backgroundColor:"darkgay",marginTop:"0px",marginBottom:"1px"}} />
                          <div className='diagnostic-content' style={{height:"19rem"}}>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                               <Button style={{marginTop:"12px",marginLeft:"3px"}} className='btn-import-prescription'>Import Prescriptions
                            <img src={IconImportPrescription } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button> 
                             
                          </div>


                         <div style={{display:"flex",marginLeft:"22px"}}> 
                              <div 
                            style={{
                              textAlign:"center",
                              fontSize:"15px",
                              width:'9rem',
                              height:"2rem",
                              backgroundColor:"lightgray",
                              paddingTop:'4px',
                                borderRadius:"5px",
                                marginTop:'56px',
                                marginBottom:'15px',
                                marginLeft:"18px"
                                }}>
                                  Diagnosis name
                                </div>
                              <div 
                            style={{
                              textAlign:"center",
                              fontSize:"15px",
                              width:'9rem',
                              height:"2rem",
                              backgroundColor:"lightgray",
                              paddingTop:'4px',
                                borderRadius:"5px",
                                marginTop:'56px',
                                marginBottom:'15px',
                                marginLeft:"18px"
                                }}>
                                  Type/Instructions
                                </div>
                            </div>
                            <p style={{color:"black",marginLeft:"16px",marginTop:"32px" }}>  
                              <img alt="" src={ IconAddRound} 
                                style={{marginRight:"10px"}}
                                /> 
                                Add Row
                              </p>  
                               <Button style={{marginTop:"12px",marginLeft:"23px"}} className='btn-import-prescription'>Save
                            <img src={ IconSave  } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"14px"}} />
                            </Button>
                               
                                  
                                  </div>
                              }   
                         </div>
                        </div>

                        </TabPanel>
                        
                        <TabPanel >
                              <div className='person-profile-tab-align' >
                              <div className='person-nontab'>
                              <div style={{Position:"absolute",top:"4px",left:"3px"}} className='reference-page'>
                        
                              <div onClick={() => toggle(toggled => !toggled)} 
                                        style={{position:'absolute',top:"-57px"}}  
                                        className='reference-tab'>Search for Doctor in Network
                                </div>
                                <div style={{position:'absolute',top:"-57px",left:"192px"}} 
                                    className='reference-tab'>External References
                                </div>
                    
                         <div>
                          <div className='history-container'>
                              <h1> Reference History</h1>
                          </div>
                    
                          <div className='reference-content '>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Reffered Doctor </p>
                                    <p className='prescription-content'>Pavan Kumar</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Feedback</p>
                                    <p  className='prescription-content'>Very Good</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Results details</p>
                               </div>
                             
                          </div>
                          <hr style={{width:"22rem",backgroundColor:"darkgay",marginTop:"0px",marginBottom:"1px"}} />
                          <div className='reference-content '>
                              
                          <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Reffered Doctor </p>
                                    <p className='prescription-content'>Pavan Kumar</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Feedback</p>
                                    <p  className='prescription-content'>Very Good</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Results details</p>
                               </div>
                             
                          </div>
                         
                           <div style={{marginTop:"38px",marginBottom:"5px",marginLeft:"15px"}}>          
                            <Button style={{marginTop:"20px"}} className='btn-regular report-btn'>Back to Consultation
                            <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                          </div>
                          </div>
                       
               

                     </div>

                       {/* tab-pages */}
                           {toggled && 
                                 <div className='diagnostics-tab-page '>
                                   <h1>no data</h1>
                                      
                                      {/* <div className='history-container'>
                              <h1>History</h1>
                          </div>
                    
                          <div className='diagnostic-content'>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                             
                          </div>
                          <hr style={{width:"22rem",backgroundColor:"darkgay",marginTop:"0px",marginBottom:"1px"}} />
                          <div className='diagnostic-content' style={{height:"19rem"}}>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Diagnostics </p>
                                    <p className='prescription-content'>Diagnostics details</p>
                               </div>
                               <div className='history-details'>
                                  <p  cclassName='prescriptions' >Results</p>
                                    <p  className='prescription-content'>Result details</p>
                               </div>
                               <Button style={{marginTop:"12px",marginLeft:"3px"}} className='btn-import-prescription'>Import Prescriptions
                            <img src={IconImportPrescription } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button> 
                             
                          </div>


                         <div style={{display:"flex",marginLeft:"22px"}}> 
                              <div 
                            style={{
                              textAlign:"center",
                              fontSize:"15px",
                              width:'9rem',
                              height:"2rem",
                              backgroundColor:"lightgray",
                              paddingTop:'4px',
                                borderRadius:"5px",
                                marginTop:'56px',
                                marginBottom:'15px',
                                marginLeft:"18px"
                                }}>
                                  Diagnosis name
                                </div>
                              <div 
                            style={{
                              textAlign:"center",
                              fontSize:"15px",
                              width:'9rem',
                              height:"2rem",
                              backgroundColor:"lightgray",
                              paddingTop:'4px',
                                borderRadius:"5px",
                                marginTop:'56px',
                                marginBottom:'15px',
                                marginLeft:"18px"
                                }}>
                                  Type/Instructions
                                </div>
                            </div>
                            <p style={{color:"black",marginLeft:"16px",marginTop:"32px" }}>  
                              <img alt="" src={ IconAddRound} 
                                style={{marginRight:"10px"}}
                                /> 
                                Add Row
                              </p>  
                               <Button style={{marginTop:"12px",marginLeft:"23px"}} className='btn-import-prescription'>Save
                            <img src={ IconSave  } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"14px"}} />
                            </Button>
                                */}
                                  
                                  </div>
                              }   
                         </div>
                        </div>

                        </TabPanel>
                  
                  
              
                         
        
                 
                
                </Tabs>
                
               
               
             
      
              </Row>
              
             
           
             </div>
            </div>
        </>
      
    )
}
export default  PersonProfile;