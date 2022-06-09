import React,{useState} from 'react';
import '../../App.css'


import IconHomeNavi from "../../assets/footerSvg/IconHomeNavi.svg";
import IconProfile from "../../assets/footerSvg/IconProfile.svg";
import IconWallet from "../../assets/footerSvg/IconWallet.svg";
import IconService from "../../assets/footerSvg/IconService.svg"
import IconSupport from "../../assets/footerSvg/IconSupport.svg"


function FooterSection() {

    // const [patient, setPatient] = useState(false)


 const [footIcon1, setFootIcon1] = useState(true)
 const handler =()=> {
    setFootIcon1(footIcon1 =>!footIcon1)
 }
  const [footIcon2, setFootIcon2] = useState(false)
  const handler2 =()=> {
    setFootIcon2(footIcon2 =>!footIcon2) 
 
 }
  
  const [footIcon3, setFootIcon3] = useState(false)
  const [footIcon4, setFootIcon4] = useState(false)
  const [footIcon5, setFootIcon5] = useState(false)
    return (
        <>
         
       

         {/* footer-section */}
         <div style={{backgroundColor:"white",boxShadow:"-12px 8px 11px 4px", width:"424px",height:"74px",position:"fixed",bottom:'0px',left:"-1px"}}>
               <div style={{paddingTop:"14px",marginLeft:"36px",display:"flex"}}>

                 <div onClick={handler} style={{marginRight:"42px"}} >
                 <img src={footIcon1 ? IconHomeNavi : IconSupport} alt=''
                     className={footIcon1  ?  'red' : 'grey'}
                    />
           
                   <p 
                     className={'foot-head ' + 
                     (
                      footIcon1 
                       ? 'foot-head--change' : ""
                       )}
                   
                   >Home</p>
                 </div>

                
                 <div onClick={handler2} style={{marginRight:"42px"}} >
                 <img src={IconProfile} alt=''
                     color={
                      footIcon2
                      
                      ? '#702cc7' : 'grey' }
                    />
                 
                   <p 
                     className={'foot-head ' + 
                     (
                       footIcon2 
                      ? 
                      'foot-head--change': ' ')}
                   
                   >Profile</p>
                 </div>
                 
                 <div onClick={() =>  setFootIcon3(footIcon3 => !footIcon3)} style={{marginRight:"42px"}} >
                 <img src={IconWallet} alt=''
                     color={footIcon3  ? '#702cc7' : 'grey' }
                    />
                 
                   <p 
                     className={'foot-head ' + (footIcon3 ? 'foot-head--change': ' ')}
                   
                   >Wallet</p>
                 </div>

                 <div onClick={() =>  setFootIcon4(footIcon4 => !footIcon4)} style={{marginRight:"42px"}} >
                 <img src={IconService} alt=''
                     color={footIcon4  ? '#702cc7' : 'grey' }
                    />
                 
                   <p 
                     className={'foot-head ' + (footIcon4 ? 'foot-head--change': ' ')}
                   
                   >Service</p>
                 </div>

                 <div onClick={() =>  setFootIcon5(footIcon5 => !footIcon5)} style={{marginRight:"42px"}} >
                 <img src={IconSupport} alt=''
                     color={footIcon5  ? '#702cc7' : 'grey' }
                    />
                 
                   <p 
                     className={'foot-head ' + (footIcon5 ? 'foot-head--change': ' ')}
                   
                   >Support</p>
                 </div>

               </div>
               
             </div>        
            
            
         
        </>

    )
}
export default FooterSection;