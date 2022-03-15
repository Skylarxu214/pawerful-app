import React, {useState} from 'react'
import PetCard from './PetCard'
import { Button, Col, Card, Row, OverlayTrigger,Tooltip } from 'react-bootstrap';
import { ShakeRotate } from 'reshake'
import { positions } from '@mui/system';

function AnimalBoard({animals,pet }){
    const [toggle, setToggle] = useState(false)
    const [cardUser, setCardUser] = useState({})
    const words= ["Hi!", "Hello!", "WHO ARE YOU???", "Stop Shaking me!!"]
    const positions =['top', 'right', 'bottom', 'left']
    function goBack(){
        setToggle(false)
    }

    function handleClick(a){
        setToggle(true)
        setCardUser(a)
      }
   

    const grid= animals.map((a)=> {
        const placement = positions[Math.floor(Math.random()*positions.length)]
        const word = words[Math.floor(Math.random()*words.length)]
        return(
           
            <Col xs={3} key={a.id} onClick={()=>handleClick(a)} >
                <ShakeRotate >
                <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                    {word}
                    </Tooltip>
                    }
                >
                    <Card  id="animal-card" style={{ width: '18rem',  }}>
                    <Card.Img variant="top" src={`${a.img}` } />
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px", color:"#3B9CD9"}}>{a.name}</Card.Title>
                        <Card.Text style={{fontSize:"20px", color:"#F2388F"}}>
                           Hey, Nice to meet you!
                        </Card.Text>
                        <Button  id="nav-toggle" variant="primary" onClick={handleClick}>About me</Button>
                    </Card.Body>
                </Card>
                </OverlayTrigger>
                </ShakeRotate>
            </Col>
        
        )
    })
    return(
        <div >
          {toggle?(
               <PetCard key={cardUser.id} user={pet} pet={cardUser} goBack={goBack} animals={animals} />
          ):(
              <div id="animal-board">
          <Row style={{padding:"20px"}}>
              {grid}
          </Row>)
          </div>
           ) }
        </div>
    )

}

export default AnimalBoard