import React, {useState} from 'react'
import OwnerCard from './OwnerCard'
import {Row} from 'react-bootstrap';
import {Checkbox, IconButton, Snackbar} from '@mui/material';
import {FavoriteBorder,Favorite,InsertEmoticon,EmojiEmotions,ThumbUpOffAlt,ThumbUpAlt,People} from '@mui/icons-material/';
import TestOwnerCard from './TestOwnerCard';
import Grow from '@mui/material/Grow';
import Tooltip from '@mui/material/Tooltip';

// import SnackBar from './SnackBar';

function OwnersBoard({owners, pet}) {
    const checked = true
    const [filtered, setFiltered] = useState(false)
    const [form,setForm] = useState({
        children: false,
         cats: false,
          dogs: false
        })

    function handleChange(e) {
        setFiltered(true)
        const key = e.target.id
        const value = e.target.checked
        setForm({
            ...form,
            [key]: value
        })
        console.log(form)

    }
    const arr = owners.filter(owner => owner.cats === form.cats && owner.dogs === form.dogs && owner.children === form.children)
    console.log(arr)

    const grid = (filtered ? arr : owners).map(owner => {
        return (<TestOwnerCard key={owner.id} owner={owner} pet={pet}/>)
        // return (<SnackBar key={owner.id} owner={owner} pet={pet}/>)

    })

    return (
            <div id="owner-board">
                <div style={{marginBottom: 40, marginTop: 20}}>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}
                 >
                     <h1>Filter your needs</h1>
                </Grow>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 2000 } : {})}
                 >
                 <Tooltip title="All">
                <IconButton
                    sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40
                    },
                    color: "#038C3E",
                    margin:"0 30px 0 "
                }}>
                    <People onClick={() => setFiltered(false)}/>
                </IconButton>
                </Tooltip>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 3000 } : {})}
                 >
                     <Tooltip title="Kids?">
                <Checkbox
                    id="children"
                    onChange={(e) => handleChange(e)}
                    icon={< FavoriteBorder />}
                    checkedIcon={< Favorite />}
                    sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40
                    },
                    color: "#EE4826",
                    '&.Mui-checked': {
                        color: "#EE4826"
                    },
                    margin:"0 30px 0 "
                }}/>
                </Tooltip> 
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 4000 } : {})}
                 >
                      <Tooltip title="Dogs?" sx={{color:"success"}}>
                <Checkbox
                    id="dogs"
                    onChange={(e) => handleChange(e)}
                    icon={< InsertEmoticon />}
                    checkedIcon={< EmojiEmotions />}
                    sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40
                    },
                    color: "#30B1BF",
                    '&.Mui-checked': {
                        color: "#30B1BF"
                    },
                    margin:"0 30px 0 "
                }}/>
                </Tooltip>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 5000 } : {})}
                 >
                      <Tooltip title="Cats?">
                <Checkbox
                    id="cats"
                    onChange={(e) => handleChange(e)}
                    icon={< ThumbUpOffAlt />}
                    checkedIcon={< ThumbUpAlt />}
                    sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40
                    },
                    color: "#F089B6",
                    '&.Mui-checked': {
                        color: "#F089B6"
                    },
                    margin:"0 30px 0 "
                }}/>
                </Tooltip>
                </Grow>
                </div>
                <div >
                <Row id="owner-row">
                    {grid}
                </Row>
                </div>
            </div>

 

    )
}

export default OwnersBoard;