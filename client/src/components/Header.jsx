import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import '../style.css'
import { alpha, styled } from '@mui/material/styles';
import {Button,Switch} from '@mui/material/';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import PetsIcon from '@mui/icons-material/Pets';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@mui/material/IconButton';






function Header({checked, setChecked,setPet, pet}){
   let navigate = useNavigate()
   const homeswitch= pet?'#F2388F':'default'
   const ownerswitch= pet?'#3B9CD9':'default'
   const petswitch= pet?'#D9A711':'default'
   const animalswitch= pet?'#329A9B':'default'
   const aptswitch= pet?'#8861A2':'default'

      const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

    //   useEffect(()=>{

    //     fetch(`/pets/${pet.id}`)
    //     .then(res => res.json())
    //     .then(user => setVisits(user.visits))

       
        
    // },[])


    const apt= pet?(!!Object.keys(pet).length && pet.visits.length):0

      function handleLogout(){
        navigate("/")
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
           
            setChecked(false)
            setPet(null)
          
          }
        });
      }

    return (
  
        <Navbar id="main-nav" expand={false}>
       
                  
            <Container  fluid>
                <Navbar.Brand href="#" id= 'nav-brand'  >
                  <img src="images/PF.png" alt="oops"  width='150px'/>
                  </Navbar.Brand>
                <Navbar.Toggle  id="nav-toggle" aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas 
                    id="offcanvas"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title >Pawerful</Offcanvas.Title>
                        <Avatar alt="Remy Sharp"  src={pet?`${pet.img}`:"images/PawerFul2.png"}  sx={{ width: 50, height: 50}}/>                   
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <IOSSwitch sx={{ m: 1 }}  checked={checked} onChange={handleLogout} />
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1" as={Link} to={'/home'}>
                        <IconButton >
                        <HomeIcon sx={{fontSize:30}} style={{color:homeswitch}}/>
                        </IconButton>
                        </Nav.Link>
                        <Nav.Link href="#action2" as={Link} to={'/board'}>
                        <IconButton >
                        <FaceRetouchingNaturalIcon  sx={{fontSize:30}}  style={{color:ownerswitch}}/>
                        </IconButton>
                        </Nav.Link>
                        <Nav.Link href="#action3" as={Link} to={'/me'}>
                        <IconButton >
                        <PetsIcon sx={{fontSize:30}}  style={{color:petswitch}}/>
                        </IconButton>
                          </Nav.Link>
                        <Nav.Link href="#action4" as={Link} to={'/animals'}>
                        <IconButton >
                        <GroupAddIcon sx={{fontSize:30}}  style={{color:animalswitch}}/>
                        </IconButton>
                          </Nav.Link>
                       
                        <Nav.Link href="#action5" as={Link} to={'/visits'}>
                        <IconButton >
                        <Badge badgeContent={apt} color="success">
                        <MailIcon sx={{fontSize:30}}  style={{color:aptswitch}}/>
                      
                        </Badge>
                        </IconButton>
                        </Nav.Link>
                        {/* <Nav.Link href="#action5" as={Link} to={'/test'}>Test</Nav.Link> */}

                     </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
           
        </Navbar>
    
    )

}


export default Header