import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ShelterCard from './ShelterCard';
import { useNavigate, Link } from "react-router-dom";




function PetCard({pet, animals, goBack, user, setPetFriends}){
    const pet_id = user.id
    const animal_id = pet.id
    const [yesFriend,setYesFriend] =useState(false)
  
    
    const yes = !!Object.keys(user).length && user.friends.find(f => f.animal_id === pet.id)
   
    
    const grid= !!Object.keys(pet).length && pet.friends.map((f)=>{
        const myfriend= animals.filter((a)=> a.id === f.animal_id)[0]
        return(
            <div key={f.id} >
                <h5>{myfriend.name}</h5> 
                <Avatar alt="Remy Sharp" src={`${myfriend.img}`}  sx={{ width: 100, height: 100}}/>
            </div>

        )
    })

    function handleFriend(){
        setYesFriend(true)
        fetch('/friends',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({pet_id, animal_id}),
          })
         
    }

    function handleRemove(){
        setYesFriend(false)
        const friend = user.friends.filter(f=> f.animal_id === pet.id)[0]
        fetch(`/friends/${friend.id}`, { method: "DELETE" })
        const afterDelete= user.friends.filter(f=> f.id !== friend.id)
        setPetFriends(afterDelete)
        
    }

    return(
      
         

            <div>
                 <div id="bubble2"></div>

                 <div style={{position:"absolute",backgroundColor:"#F2D649", width:"50%", paddingTop:"10%",height:"80%", opacity:"0.8",borderRadius: "15%"}}></div>
                 <div id="user-image">
            <img src={`${pet.pic}`} alt="oops" style={{width:"100%",borderRadius: "20%"}}/>
            </div>
                 <div id="cloud"></div>
    
                
          
                 <div style={{position:"absolute", paddingTop:"10%"}}>
                <h1 style={{fontSize:"200px",color:"#FEFAF1"}}>Hello! I'm <span style={{color:"black"}}>{pet.name}</span>, </h1>
                <h style={{fontSize:"100px",left: 20}}>I am a {pet.age} years old {pet.breed}.</h>
                <h2 style={{fontSize:"80px", color:"#4D7523"}}>Nice to meet you!</h2>
                <h3 style={{fontSize:"60px"}}>My Shelter  : 
                <Link to="/shelter" style={{color:"#4D7523", fontSize:"50px", color:"#FEFAF1"}}> {pet.shelter.name}</Link>
                </h3>
                <div id="friend-btn">
                {yes||yesFriend?<Button  variant="outlined" size="large" color="error"  onClick={handleRemove} >Remove Friend</Button>
                 : <Button variant="contained" size="large" color="success"  onClick={handleFriend}>make friend</Button>}
                 </div>
                 <div>
                <Button variant="outlined" size="large" color="success" onClick={goBack}>Back</Button>
                </div>
            </div>
           
          
            
    
           
           
            </div>
        


    )



}

export default PetCard