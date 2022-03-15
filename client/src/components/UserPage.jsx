import React, {useEffect, useState} from 'react'
import '../style.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PetCard from './PetCard'
import { useNavigate, Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';



function UserPage({ pet, animals,owners}){
    const [toggle, setToggle] = useState(false)
    const [friend,setFriend]= useState({})
    const [petFriends, setPetFriends] = useState(pet.friends)
    const [visits, setVisits] = useState([])
    const [dialog, setDialog] = useState(false)
    const [avatars, setAvatars] = useState(false)
    // let navigate = useNavigate();

    useEffect(()=>{

        fetch(`/pets/${pet.id}`)
        .then(res => res.json())
        .then(user => setVisits(user.visits))

        fetch(`/pets/${pet.id}`)
        .then(res => res.json())
        .then(user => setPetFriends(user.friends))

        
    },[])
    
    const apts= !!visits.length && visits.map(v=>{
        let date = new Date(v.apt_date)
        let month = date.getMonth() + 1; 
        let day = date.getDate();
        let year = date.getFullYear();
        let newdate = year + "/" + month + "/" + day;

        const owner= !!owners.length && owners.filter(o=> o.id === v.owner_id)[0]

        return(
            <div key={v.id}>
                {(v.apt_date< new Date())? null : 
                <h6>{newdate} with {owner.name} </h6>
                 }
            </div>
        )
    })
    

    const grid= !!petFriends.length && petFriends.map((f)=>{
       
        const myfriend= !!Object.keys(animals).length && animals.filter((a)=> a.id === f.animal_id)[0]
       
        return(
            <div key={f.id} onClick={()=>handleClick(myfriend)}>
                <h5>{myfriend.name}</h5> 
                <Avatar alt="Remy Sharp" src={`${myfriend.img}`}  sx={{ width: 100, height: 100}}/>
            </div>

        )
    })
    const handleDialogOpen = () => {
        setDialog(true);
      };
    
      const handleDialogClose = () => {
        setDialog(false);
      };

      const handleFriendOpen = () => {
        setAvatars(true);
      };
    
      const handleFriendClose = () => {
        setAvatars(false);
      };
    function goBack(){
        setToggle(false)
    }
    function handleClick(myfriend){
       setToggle(true)
       setFriend(myfriend)
     }
      console.log(pet.img)
    return(
        <div>
            {toggle?(
             <PetCard key={friend.id} pet={friend} animals={animals} goBack={goBack} user={pet} setPetFriends={setPetFriends}/>
            ):(
            <div>
                 <div id="bubble"></div>

                 <div style={{position:"absolute",backgroundColor:"#F2D5E5", width:"50%", paddingTop:"10%",height:"80%", opacity:"0.8",borderRadius: "15%"}}></div>
                 <div id="user-image">
            <img src={`${pet.pic}`} alt="oops" style={{width:"100%",borderRadius: "20%"}}/>
            </div>
                 <div id="orange"></div>
                 <div id="user-friends">
                <h2 style={{fontSize:"50px", color:"#FEFAF1"}}>Furiends:</h2>
                <Button variant="outlined" onClick={handleFriendOpen}>
                   Check Friends
                </Button>
                <Dialog
                open={avatars}
                onClose={handleFriendClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
       
                <DialogContent>
                {grid}  
                 </DialogContent>
       
                </Dialog>
                
            </div>
                 <div style={{position:"absolute", paddingTop:"10%"}}>
                <h1 style={{fontSize:"200px",color:"#FEFAF1"}}>Hello! I'm <span style={{color:"black"}}>{pet.name}</span>, </h1>
                <h style={{fontSize:"100px",left: 20}}>I am a {pet.age} years old {pet.breed}.</h>
                <h2 style={{fontSize:"80px", color:"#4D7523"}}>Nice to meet you!</h2>
                <h3 style={{fontSize:"60px"}}>My Shelter  : 
                <Link to="/shelter" style={{color:"#4D7523", fontSize:"50px", color:"#FEFAF1"}}> {pet.shelter.name}</Link>
                </h3>
                

            </div>
           
          
            
    
            <div id="user-visits" style={{position:"absolute"}}>
                <h3 style={{fontSize:"50px", color:"#4D7523"}}>Visits:</h3>
                <Button variant="outlined" onClick={handleDialogOpen}>
                   Check Visits
                </Button>
                <Dialog
                open={dialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
       
                <DialogContent>
                {apts}  
                 </DialogContent>
       
                </Dialog>
                    
            </div>
           
            </div>
            )}
            

        
           
        </div>

    )



}

export default UserPage