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

import IconBilling from "../assets/logo/IconBilling.svg";
import IconOngoing from "../assets/logo/IconOngoing.svg";

import IconEndConsultation from "../assets/logo/IconEndConsultation.svg";

import 'react-tabs/style/react-tabs.css'
// import 'react-tabs/style/react-tabs.css';

import { Input } from 'antd';
const { TextArea } = Input;






function PersonProfile() {  
    // const history = useNavigate();


  const [historyTab, setHistoryTab] = useState(false)  
  const [toggled,toggle] = useState(false)
  const [prescriptionTab,setPrescriptionTab] = useState(false)
  
  const [diagnosisTab,setDiagnosisTab] = useState(false)
  
 
  const [billTab,setBillTab] = useState(false)

  const [patientProfileTab,setpatientProfileTab] = useState(false)
  const [doctorView,setDoctorView] = useState(false)

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
              
               <Tabs  className='consult-icon-container'>
                   <TabList style={{display:"contents"}}>
                   
                   <Tab onClick={() => setHistoryTab(historyTab=> !historyTab)}  className='person-profile-page-round-bg'>
                   
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
                  
                 
              
                 {historyTab &&   <TabPanel style={{position:'absolute', top:'152px',left:"168px"}}>
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
                                  <p  className='prescriptions' >Diagnotics</p>
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
                      }

                     <TabPanel>
                  <div className='person-profile-tab-align' >
                   <div className='person-nontab'>
                   <div style={{Position:"absolute",top:"4px",left:"3px"}} className='history-page'>
             
                     <div onClick={() => setPrescriptionTab(prescriptionTab=> !prescriptionTab)}
                             style={{position:'absolute',top:"-57px"}}  
                            className={'prescription-tab ' + (prescriptionTab ? 'prescription-tab-after': '')}>
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
                                  <p  className='prescriptions' >Diagnotics</p>
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
                                  <p  className='prescriptions' >Diagnotics</p>
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
                             className={'prescription-tab ' + (diagnosisTab ? 'prescription-tab-after': '')}>New Diagnostics
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
                                  <p  className='prescriptions' >Results</p>
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
                                  <p  className='prescriptions' >Results</p>
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
                                  <p  className='prescriptions' >Results</p>
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
                                  <p  className='prescriptions' >Results</p>
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
                                  <p  className='prescriptions' >Feedback</p>
                                    <p  className='prescription-content'>Very Good</p>
                               </div>
                               <div className='history-details'>
                                  <p  className='prescriptions' >Results</p>
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
                                  <p  className='prescriptions' >Feedback</p>
                                    <p  className='prescription-content'>Very Good</p>
                               </div>
                               <div className='history-details'>
                                  <p  className='prescriptions' >Results</p>
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
                                      
                                 
                                  </div>
                              }   
                         </div>
                        </div>

                        </TabPanel>
                  
                  
              
                         
        
                 
                
                </Tabs>
                
              { !historyTab && <div className='person-profile-tab-align' >
                   <div className='doctor-view-nontab'>
                   <div style={{Position:"absolute",top:"4px",left:"3px"}} className='history-page'>
             
                     <div 
                             style={{position:'absolute',top:"-57px"}}  
                             onClick={() => setpatientProfileTab(!patientProfileTab)} 
                             className={'prescription-tab ' + (patientProfileTab  ? 'prescription-tab-after': '')}>
                               <img src={ ArrowLeft } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            Patient Profile
                    </div>
                     <div onClick={() => setBillTab(!billTab)} style={{position:'absolute',top:"-57px",left:"184px"}} 
                        className={'prescription-tab ' + (billTab   ? 'prescription-tab-after': '')}>Bill Payment
                    </div>
                  
                          



                         <div style={{padding:"15px"}}>
                         
                          <p>Notes</p>
                              <TextArea rows={4} 
                              className='text-area '
                              placeholder="" 
                              maxLength={60} />
                         
                         <div style={{marginTop:"38px",marginBottom:"5px",marginLeft:"-2px"}}>
                            <Button   className='btn-regular save-btn'>Save 
                             <img src={ IconSave } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} /> </Button>    
                                     
                            <Button style={{marginTop:"20px"}} 
                            onClick={() => setDoctorView(doctorView=> !doctorView)}
                            className='btn-regular report-btn'>End Consultation
                            <img src={ IconEndConsultation } alt="" 
                             style={{width:"24px",position:"absolute",right:"16px",top:"20px"}} />
                            </Button>
                          </div>
                          </div>
                       
              {doctorView && 
                <div className='person-profile-tab-align' >
                <div className='person-nontab'>
                <div style={{Position:"absolute",top:"-197px",left:"3px"}} className='history-page'>
          
                      <div style={{paddingLeft:"30px",marginTop:"30px",marginBottom:"30px"}}>
                       
                        <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Name</p>
                            <p className='doctor-view-details'>31/05/2022</p>
                          </div>
                         
                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Age</p>
                            <p className='doctor-view-details'>36</p>
                          </div>

                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Address</p>
                            <p className='doctor-view-details'>Address details</p>
                          </div>

                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Occupation</p>
                            <p className='doctor-view-details'>Occupation details</p>
                          </div>

                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Blood group</p>
                            <p className='doctor-view-details'>A1+</p>
                          </div>

                           <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Health consditions</p>
                            <p className='doctor-view-details'>Good</p>
                          </div>

                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Allergies</p>
                            <p className='doctor-view-details'>No</p>
                          </div>

                          <div  style={{marginTop:"10px"}}>
                          <p className='doctor-view-heading'>Previous surgeries</p>
                            <p className='doctor-view-details'></p>
                          </div>
                       
                   
                       
                      
                       
                       </div>
                 
                 <div style={{display:"flex"}}>
                  <div style={{marginLeft:"9px"}}>
                  <div className='doctor-card-details'>
                    <img src ={IconBilling} alt='' style={{width:'37px'}}/>
                    <p style={{paddingLeft:"1px",textAlign:"center",paddingTop:"7px"}}>Billing from Patient</p>
                   <ul  style={{marginTop:"-3px",marginLeft:"-24px"}}>
                    <li>Direct</li>
                    <li>Indirect</li>
                    </ul>

                    </div>
            
                    </div>

                    <div style={{marginLeft:"9px"}}>
                  <div className='doctor-card-details'>
                    <img src ={IconOngoing} alt='' style={{width:'37px'}}/>
                    <p style={{paddingRight:"6px",paddingLeft:"8px",textAlign:"center",paddingTop:"13px"}}>
                      Ongoing prescription or medicine</p>
                   
                

                    </div>
            
                    </div>

                    <div style={{marginLeft:"9px"}}>
                  <div className='doctor-card-details'>
                    <img src ={IconOngoing} alt='' style={{width:'37px'}}/>
                    <p style={{paddingRight:"6px",paddingLeft:"8px",textAlign:"center",paddingTop:"13px"}}>
                      Ongoing prescription or medicine</p>
                   
                

                    </div>
            
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
                               <p  className='prescriptions' >Diagnotics</p>
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
                          }

                     </div>

                       {/* tab-pages */}
                       {patientProfileTab && 
                                 <div className='prescription-tab-page'>
                              <div style={{padding:"30px"}}>  
                              <h1>Notes</h1>
                              <TextArea rows={4} 
                              // className='text-area '
                              style={{height:"11rem"}}
                              placeholder="" 
                              maxLength={60} />
                    
                                </div>
                        
                                      
                                </div>
                               }   


                           {billTab && 
                                 <div className='prescription-tab-page' style={{height:"76rem"}}>
                          <div className='history-container'>
                              <h1 style={{fontSize:"21px"}}>Last 3 bills, list</h1>
                                </div>
                                
                                <div>
                                <div className='bill-container'>
                              <h1 className='bill-heading'>Bill No 1</h1>
                                </div>
                               <div className='bill-Prescription-content' style={{height:"13rem"}}>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Amount</p>
                                    <p className='prescription-content'>Rs. 6,500/-</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Bill Number</p>
                                    <p className='prescription-content'>BK54685</p>
                               </div>
                             </div>
                                   </div>

                                   <div  style={{marginTop:"-11px"}}>
                                <div className='bill-container'>
                              <h1 className='bill-heading'>Bill No 1</h1>
                                </div>
                               <div className='bill-Prescription-content' style={{height:"13rem"}}>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Amount</p>
                                    <p className='prescription-content'>Rs. 6,500/-</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Bill Number</p>
                                    <p className='prescription-content'>BK54685</p>
                               </div>
                             </div>
                                   </div>


                                   <div style={{marginTop:"-11px"}}>
                                <div className='bill-container '>
                              <h1 className='bill-heading'>Bill No 1</h1>
                                </div>
                               <div className='bill-Prescription-content bill-border' style={{height:"13rem"}}>
                              
                              <div className='history-details'>
                                <p   className='prescriptions'>Date 1</p>
                                   <p  className='prescription-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Amount</p>
                                    <p className='prescription-content'>Rs. 6,500/-</p>
                               </div>
                               <div className='history-details'>
                                  <p className='prescriptions'>Bill Number</p>
                                    <p className='prescription-content'>BK54685</p>
                               </div>
                             </div>
                                   </div>


                                   
                            
                          <div className='history-container'>
                              <h1 style={{fontSize:"21px"}}>Outstanding bill</h1>
                                </div>
                          <div className='Prescription-content' style={{height:"11rem"}}>
                            <div className='history-details'>
                                <p   className='outstanding-name'>Date 1</p>
                                   <p  className='outstanding-content'>27/05/2022</p>
                               </div>
                               <div className='history-details'>
                                <p   className='outstanding-name'>Total outstanding amount</p>
                                   <p  className='outstanding-content'>Rs. 32,650/-</p>
                               </div>
                               
                          </div>
                                      
                                </div>
                               }   
                         </div>
                        </div>
                              }
             
      
              </Row>
              
             
           
             </div>
            </div>
        </>
      
    )
}
export default  PersonProfile;