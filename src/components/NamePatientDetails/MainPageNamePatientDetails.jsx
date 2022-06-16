import React from 'react';
import { useState } from "react";
import '../../Style.css';
import FooterSection from '../MyPatientsFolder/FooterSection';

import { Row} from 'antd';


import BackArrow from "../../assets/icon/BackArrow.svg"
// import MainheaderNamePatientDetail from './MainheaderNamePatientDetail';
import HeaderNamePatientDetail from './HeaderNamePatientDetail';
import NameCard from './NameCard';
import { StartVisitIconChange } from './Name-patient-Icons/StartVisitIconChange';

import IconAddRound from '../../assets/logo/IconAddRound.png'
import {useNavigate} from 'react-router-dom'

function MainPageNamePatientDetails() {
  const history = useNavigate(); 
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
        <>
        {/* <MainheaderNamePatientDetail/> */}
        <div style={{position:"fixed",zIndex:"3"}} >
             <Row onClick={() => history("/")}
             className='mypatient-heading' >
                <img src={BackArrow} alt=''  className='arrow-size' style={{top:"7px"}}/>
                 <h1 className='header-title'  style={{top:"4px"}}>Dr. Pavan Kumar</h1>       
             </Row>
          </div>
        <HeaderNamePatientDetail/>
       
        <div className='myappoint-special-card'>
        <NameCard/>
          <div className="container">
     <div style={{position:"absolute",top:"111px"}}>
       <div className="name-detail-tabs">

      

        <div
          className={toggleState === 1 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(1)}
        >
          
         
            <StartVisitIconChange style={{width:"23px"}} color={toggleState === 1 ? "white": "#702cc7"}/>
              
               <p className={toggleState === 1 ?  "tab-content-name" : "tab-content-name-color" }>
                 Past<br/> Visits
                 </p>
              
         </div>

         <div
          className={toggleState === 2 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(2)}
        >
          
         
            <StartVisitIconChange style={{width:"23px"}} color={toggleState === 2 ? "white": "#702cc7"}/>
              
               <p className={toggleState === 2 ?  "tab-content-name" : "tab-content-name-color" }>
                 Assessments Responses
                 </p>
            
         </div>

         <div
          className={toggleState === 3 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(3)}
        >
          
         
            <StartVisitIconChange style={{width:"23px"}} color={toggleState === 3 ? "white": "#702cc7"}/>
              
               <p className={toggleState === 3 ?  "tab-content-name" : "tab-content-name-color" }>
                 Medical <br/> History
                 </p>
              
         </div>
         
         <div
          className={toggleState === 4 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(4)}
        >
          
         
            <StartVisitIconChange style={{width:"23px"}} color={toggleState === 4 ? "white": "#702cc7"}/>
              
               <p className={toggleState === 4 ?  "tab-content-name" : "tab-content-name-color" }>
               Medical <br/> Record
                 </p>
              
         </div>

         <div
          className={toggleState === 5 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(5)}
        >
          
         
            <StartVisitIconChange style={{width:"44px"}} color={toggleState === 5 ? "white": "#702cc7"}/>
              
               <p style={{margin:'20px'}} className={toggleState === 5 ?  "tab-content-name" : "tab-content-name-color" }>
                 Vitals
                 </p>
              
         </div>

         <div
          className={toggleState === 6 ? "name-tab icon-change-tab" : "name-tab"}
          onClick={() => toggleTab(6)}
        >
          
         
            <StartVisitIconChange style={{width:"44px",marginTop:"-12px"}} color={toggleState === 6 ? "white": "#702cc7"}/>
              
               <p style={{margin:'15px'}} className={toggleState === 6 ?  "tab-content-name" : "tab-content-name-color" }>
                 Receipts
                 </p>
              
         </div>

      
      


        
        

      
          </div>

    <div className="content-tabs">

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
         
            <div className='past-visit-container'>
            <div className='past-visit-cards'>
            <h1 className='past-visit-content'>Aborted</h1>
            <h1 className='past-visit-content'>13/06/2022</h1>
             </div>

             <div className='past-visit-cards'>
                <h1 className='past-visit-content'>Aborted</h1>
                   <h1 className='past-visit-content'>13/06/2022</h1>
               </div>

               <div className='past-visit-cards'>
                <h1 className='past-visit-content'>Date/ Time of Visit</h1>
                   <h1 className='past-visit-content'>13/06/2022</h1>
               </div>

               <div className='past-visit-cards'>
                <h1 className='past-visit-content'>Date/ Time of Visit</h1>
                   <h1 className='past-visit-content'>13/06/2022</h1>
               </div>

               <div className='past-visit-cards'>
                <h1 className='past-visit-content'>No Show</h1>
                   <h1 className='past-visit-content'>13/06/2022</h1>
               </div>

            

               
        
               </div>
          </div> 
      

             <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
           
         <div className='past-visit-container'>
            <div className='past-visit-cards'
             style={{height:"8rem",display:"flex",flexDirection:"column",
            justifyContent:"center",alignItems:"center"
            }}
            >
              <h1 className='past-visit-content'
              style={{color:"#C9C9CA",fontSize:'15px'}}
              >No Assessments from this patient yet</h1>
           
             </div>

        
         </div>
          
          
              </div>

              <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
            <div className='past-visit-container'>

              <div className='past-visit-cards'>
                 <h1 className='past-visit-content'>Aborted</h1>
                 <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
               </div>

                 <div className='past-visit-cards'>
                 <h1 className='past-visit-content'>Family History</h1>
                 <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                   </div>

                    <div className='past-visit-cards'>
                 <h1 className='past-visit-content'>Lifestyle Habit</h1>
                 <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                       </div>

                       <div className='past-visit-cards'>
                          <h1 className='past-visit-content'>Food / Other Allergy</h1>
                            <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>

                         <div className='past-visit-cards'>
                            <h1 className='past-visit-content'>Drug Allergy</h1>
                            <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>

                         <div className='past-visit-cards'>
                           <h1 className='past-visit-content'>Past Procedure</h1>
                             <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>
                            
                          <div className='past-visit-cards'>
                          <h1 className='past-visit-content'>Current Medication</h1>
                            <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>

                         <div className='past-visit-cards'>
                            <h1 className='past-visit-content'>Travel History</h1>
                            <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>

                         <div className='past-visit-cards'>
                           <h1 className='past-visit-content'>Other Medical History</h1>
                             <img src={IconAddRound} style={{width:"26px",height:"26px"}} alt=''/>
                          </div>

             

            

               
        
               </div>
              
               </div>


                  <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
              <div className='past-visit-container'>
            <div className='past-visit-cards'
             style={{height:"8rem",display:"flex",flexDirection:"column",
            justifyContent:"center",alignItems:"center"
            }}
            >
              <h1 className='past-visit-content'
              style={{color:"#C9C9CA",fontSize:'15px'}}
              >No Assessments from this patient yet</h1>
              <button
              className='refresh-btn'
              >Refresh <img src={IconAddRound} style={{width:"15px",height:"15px",marginLeft:'32px'}} alt=''/></button>
           
             </div>

        
         </div>
                   </div>

                   <div
                      className={toggleState === 5 ? "content  active-content" : "content"}>
                    
                       <div className='past-visit-container'>
                           <div className='past-visit-cards'
                              style={{height:"8rem",display:"flex",flexDirection:"column",
                                justifyContent:"center",alignItems:"center"
                                  }}>
                        <h1 className='past-visit-content'
                        style={{color:"#C9C9CA",fontSize:'15px'}}
                        >No Vitals from this patient yet</h1>
                    
                     </div>

        
         </div>
          
          
                     </div>

                     <div
                      className={toggleState === 6 ? "content  active-content" : "content"}>
                    
                       <div className='past-visit-container'>
                           <div className='past-visit-cards'
                              style={{height:"8rem",display:"flex",flexDirection:"column",
                                justifyContent:"center",alignItems:"center"
                                  }}>
                        <h1 className='past-visit-content'
                        style={{color:"#C9C9CA",fontSize:'15px'}}
                        >No Vitals from this patient yet</h1>
                    
                     </div>

        
         </div>
          
          
                     </div>



         </div>




               </div>
            </div>
        </div>
    <FooterSection/>

        
       
          
         
        </>

    )
}
export default MainPageNamePatientDetails;