import React from 'react'
import backgroundImg from '../images/spacedog.jpg';
import Grow from '@mui/material/Grow';


function Home({pet}) {
    
   const checked=true

    return (
            <div  style={{backgroundImage:`url(${backgroundImg})`, height:"92vh", backgroundSize: 'cover', paddingTop:"10px" }} >
                   
                     <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 10000 } : {})}
                        >
                     <div id="name-div">Hello, <span style={{color:"#4D7523"}}>{pet.name}</span></div>
                      </Grow>
                      <p></p>
                      <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 15000 } : {})}
                        >
                     <div id="welcome-div">Wel<span style={{color:"#4D7523"}}>come Bark!</span></div>
                      </Grow>
                    
                  
               
           </div>

    )
}

export default Home;