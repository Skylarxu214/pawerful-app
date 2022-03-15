import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button, Offcanvas } from 'react-bootstrap';
import { ShakeCrazy  } from 'reshake'
import BusinessIcon from '@mui/icons-material/Business';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Row, Col } from 'react-bootstrap';



function ShelterCard({pet,shelters}){
    const [shake, setShake] = useState(false);
    const colors = ["#F28DBC","#049DD9","#79BF65","#F2B705","#7F81BE"]
  

    
    function handleShake(){
        setShake(true)
        setTimeout(() => {setShake(false)}, 1000)
    }
    const myshelter = !!shelters.length && shelters.filter(s=> s.id===pet.shelter.id)[0]

    const grid= !!Object.keys(myshelter).length && myshelter.pets.map(p=>{
        const color=colors[Math.floor(Math.random()*colors.length)]
        return(
            
            <Col  align="center" key={p.id} style={{
               boxShadow: "10px 10px 10px 10px #4D7523",
                margin:"100px",
                width: "300px",
                borderRadius: "20%",
                paddingTop: "40px"
                
                }}>
                    <ShakeCrazy>
                  
        
                     
                     <Avatar alt="Remy Sharp" src={`${p.img}`}  sx={{ width: 200, height: 200}}/>
                     <h5>{p.name}</h5> 
                </ShakeCrazy>  
            
            </Col>
          
        )
    })



      return (
          <div style={{textAlign:"center"}}>
                <div id="shelter-info" >
                <h1 style={{fontSize:"80px"}}>{myshelter.name}</h1> 
               <BusinessIcon style={{ fontSize: 50,color:"#4D7523"}}/><h4 >{myshelter.address} {myshelter.zipcode}</h4>
               <AlternateEmailIcon style={{ fontSize: 50,color:"#4D7523"}}/><h4>Email: {myshelter.email}</h4>
               <PhoneInTalkIcon style={{ fontSize: 50,color:"#4D7523"}}/><h4>Contact Us: {myshelter.phone}</h4>
               </div>
                <div id="resident-box">
                <h2 style={{fontSize:"60px", color:"#4D7523"}}>Our Residents:</h2>
                <Row>
                {grid}
                </Row>
                
               </div>
             
            
          </div>
      )

}

export default ShelterCard