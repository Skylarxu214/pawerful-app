import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';


function Visits({pet, owners}){

    const heights = [ 300, 900, 700,  500,  300, 500, 800];
    const colors = ["#F28DBC","#049DD9","#79BF65","#F2B705","#7F81BE"]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
     
      const [visits, setVisits] = useState([])
      const [checked, setChecked] = useState({})

  
      useEffect(()=>{
          fetch(`/pets/${pet.id}`)
          .then(res => res.json())
          .then(user => setVisits(user.visits))

      },[])

      function handleClick(v){
        setChecked(v)
        fetch(`/visits/${v.id}`, { method: "DELETE" })

    }

      const grid = !!visits.length && visits.map(v=>{
        let date = new Date(v.apt_date)
        let month = date.getMonth() + 1; 
        let day = date.getDate();
        let year = date.getFullYear();
        let newdate = year + "/" + month + "/" + day;
        const owner= !!owners.length && owners.filter(o=> o.id === v.owner_id)[0]
        let height = heights[Math.floor(Math.random()*heights.length)]
        const color=colors[Math.floor(Math.random()*colors.length)]


        

        return(
           <>
                {(v.apt_date< new Date()|| v===checked)? null :(
                    <Item key={v.id} sx={{ height , width: 300, color, boxShadow:"10px 10px 10px #F9D446" }}>
                    <div style={{fontFamily:'Abril Fatface' }}>
                     <h1 >{newdate}</h1>
                     <h5>With:{owner.name}</h5>
                     <Button variant="outlined" color="success" onClick={()=>handleClick(v)}>
                        checkIn
                    </Button>
                     </div>
                     </Item>
                )

                }
             </>  
              
           
         )
        })
    return(
        <div style={{ textAlign: "center"}}>
            <Box sx={{ width: "auto", minHeight: 1000, textAlign: "center", paddingTop:5 }}>
             <Masonry columns={{ xs: 3, sm: 4 }} spacing={4}>
        
                {grid}
                
            </Masonry>
           </Box>
        </div>
    )

}

export default Visits