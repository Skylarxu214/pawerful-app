import React, {useState} from 'react'
import '../style.css'
import { Button, Offcanvas, Col, Card } from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Zoom from '@mui/material/Zoom';





function OwnerCard({owner,pet}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const [date, setAptDate] = useState(new Date());
  //use Date(parse) to get back the actual date 
  const pet_id =pet.id
  const owner_id = owner.id

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleSubmit(){
    let apt_date = date
    setOpen(false)

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
         <Col xs={6}  align="center">
        <Card style={{ width: '50%', padding: "50px", margin:"10px"}}>
      <Card.Img variant="top" src={`${owner.img}`} />
      <Card.Body>
        <Card.Title>{owner.name}</Card.Title>
        <Card.Text>
         {owner.profile}
        </Card.Text>
        <Button   variant="warning" onClick={handleShow}>Click</Button>
      </Card.Body>
      </Card>
     
      <Offcanvas show={show} onHide={handleClose} placement="top" style={{height: "60%"}} >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1 >{owner.name}</h1>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div style={{float: "right"}}>
              <img src={`${owner.img}`} alt="coming" style={{width: '20rem' }}></img>
              </div>

              <div>
              <h5>Email: {owner.email}</h5>
              <h5>Children: {(owner.children=== true)? "yes": "no"} </h5>
              <h5>Cats: {(owner.cats=== true)? "yes": "no"} </h5>
              <h5>Dogs: {(owner.dogs=== true)? "yes": "no"} </h5>
              <h5>HomeSpace: {owner.homespace}</h5>
             <h3>About Me:
               <p></p>
               {owner.profile}
             </h3>
             <Button variant="primary" onClick={handleClickOpen}>Book</Button>
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
                        <Button variant='primary'   onClick={handleSubmit} >Submit</Button>
            </Dialog>
            </div>
             
             </Offcanvas.Body>
    </Offcanvas> 
   
    </Col>
    </Zoom>
);

}

export default OwnerCard