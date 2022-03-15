import React, {useState} from 'react'
import '../style.css'
import { Button, Offcanvas, Col } from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Zoom from '@mui/material/Zoom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PetsIcon from '@mui/icons-material/Pets';
import CottageIcon from '@mui/icons-material/Cottage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';






function TestOwnerCard({owner,pet}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const [date, setAptDate] = useState(new Date());
  const [snackOpen, setSnackOpen] = useState(false)
  const pet_id =pet.id
  const owner_id = owner.id
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  function handleSubmit(){
    let apt_date = date
    setOpen(false)
    setSnackOpen(true)
  

    fetch('/visits',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({apt_date,pet_id,owner_id})
    }

  );
  }


  



return(
  
       <Zoom in={true}  style={{ transitionDelay: '500ms' }}> 
         <Col xs={4}  align="center">
       

<div class="container">
  <div class="img-container"  onClick={handleShow}>
    <img src={`${owner.img}`} alt=""/>
  </div>
		<div class="user-info">
			<h2>{owner.name}</h2>
      <span>{owner.profile}</span>
		</div>
</div>
    
     
      <Offcanvas show={show} onHide={handleClose} placement="top" style={{height: "80%", fontFamily:"Abril Fatface", backgroundColor:"#FEFAF1"}} >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1 style={{fontSize:"10vh"}}>{owner.name}</h1>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div style={{float: "right", backgroundColor:"#FEFAF1", width:"30%",  textAlign:"center", boxShadow:"20px 20px 20px 20px #4D7523"}}>
              <img src={`${owner.img}`} alt="coming" style={{width: '20rem' }}></img>
              </div>

              <div>
              <h5 style={{fontSize:"5vh"}}>Email: <span style={{color:"#4D7523"}}>{owner.email}</span></h5>
              <ChildCareIcon style={{ fontSize: 50,color:"#F28DBC"}}/> :     {(owner.children=== true)?
               <CheckCircleIcon style={{ fontSize: 50, color:"#4D7523"}}/>:
               <CancelIcon style={{ fontSize: 30}}/>
               }
              <h5></h5>
              <CatchingPokemonIcon style={{ fontSize: 50, color:"#F2B705"}}/> :     {(owner.cats=== true)?
               <CheckCircleIcon style={{ fontSize: 30, color:"#4D7523"}}/>:
               <CancelIcon style={{ fontSize: 30}}/>
               }
              <h5> </h5>
              <PetsIcon style={{ fontSize: 50, color:"#049DD9"}}/> :     {(owner.dogs=== true)?
               <CheckCircleIcon style={{ fontSize: 30, color:"#4D7523"}}/>:
               <CancelIcon style={{ fontSize: 30}}/>
               }
              <h5> </h5>
              <h3 style={{color:"#4D7523"}}>
              <CottageIcon style={{ fontSize: 50, color:"#7F81BE"}}/>  :{owner.homespace}</h3>
              <h5></h5>
             <h2>About Me:
               <p></p>
               <span style={{color:"#4D7523"}}> {owner.profile}</span>

             </h2>
             <p>
             </p>
             <Button variant="success" onClick={handleClickOpen}>Book</Button>
             <Dialog
              open={open}
            
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={date}
                    onChange={(newValue) => {
                        setAptDate(newValue);
                        }}
                  />
                </LocalizationProvider>
                        <Button variant='success'   onClick={handleSubmit} >Submit</Button>
            </Dialog>
            </div>
             
             </Offcanvas.Body>
    </Offcanvas> 
    <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose}>
   <Alert  severity="success" sx={{ width: '100%' }} onClose={handleSnackClose}>
    Appointment setup with {owner.name}!
   </Alert>
 </Snackbar>
    </Col>
       
    </Zoom>
  

);

}

export default TestOwnerCard