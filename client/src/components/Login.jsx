import { textAlign } from '@mui/system';
import React, {useState} from 'react'
import { Button, Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import '../style.css'
import backgroundImg from '../images/hello.jpg';


function Login({pet,setPet,setChecked}){
    const [password, setPassword]=useState("")
    const [name, setName]= useState("")
    let navigate = useNavigate();



    function handleSubmit(e){
        e.preventDefault();
       
        fetch("/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,password}),
        })
        .then((r)=>{
          if(r.ok) {
            r.json().then((pet)=> setPet(pet));
          }
        });
        setChecked(true)
     
        !!Object.keys({pet}).length && navigate("/home")
        
       }

       return (
      <div >
        {pet?(
        <div  style={{backgroundImage:`url(${backgroundImg})`, height:"92vh", backgroundSize: 'cover', paddingTop:"10px" }} >

            <h1 style={{fontSize:"200px", color:"#FEFAF1"}}>{pet.name},</h1>
            <h1 style={{fontSize:"100px"}}>You Are Here!</h1>

          </div>

        ):(
          <div style={{backgroundSize: 'cover',height:"100vh", backgroundColor: "#FEFAF1",textAlign:"center"}}>
          <h1>Sign In</h1>
          <Form id="login-form" onSubmit={handleSubmit} >
              <Form.Text >
                Name
              </Form.Text>
          
              <Form.Control
                  className="mb-3"
                   value= {name} 
                   onChange={(e) => setName(e.target.value)}
              />
               <Form.Text>
             Code 
              </Form.Text>

              <Form.Control 
                className="mb-3"
                   type="password"
                  //  placeholder="Password"
                   value= {password} 
                   onChange={(e) => setPassword(e.target.value)}
              />
              
              <Button type="submit" className="btn btn-success mb-3">Tap</Button>
          </Form>  
       </div>

        )

        }
      </div>
         
        
           
       )
}

export default Login