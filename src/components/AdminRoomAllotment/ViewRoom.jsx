import React ,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../service/api';
import {Typography,Grid,Box,MenuItem} from '@material-ui/core';
import { TextField, Button } from "@mui/material";
const ViewRoom = () => {
    
    const [hostel, setHostel] = useState("")
    const navigate=useNavigate();

    const viewRoom=async()=>{  
        if(hostel==="")
        {
            return alert("Please Enter Hostel !")
        }

        navigate(`/roomAllotment/${hostel}`);
    }
    const handleReset=()=>{
        setHostel("");
    } 

    return ( 
        <React.Fragment>
            <Typography align="center" style={{fontSize:'3rem',marginTop:'5rem',color:'tomato'}}>SELECT HOSTEL</Typography>
                 <TextField 
                    label="Hostel"
                    onChange={e => setHostel(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={hostel}
                    select
                    sx={{mb: 3,width:'18rem'}}
                 >
                    <MenuItem value="BH1">BH1</MenuItem>
                    <MenuItem value="BH2">BH2</MenuItem>
                   <MenuItem value="GH">GH</MenuItem>
                 </TextField>
                 <div style={{display:'flex',flexDirection:'row',marginTop:'2rem'}}>
                    <Button variant="outlined" color="secondary" type="reset" style={{color:'red',marginRight:'3.8rem'}} onClick={()=>handleReset()}>Reset</Button>
                 <Button variant="outlined" color="secondary" type="submit" style={{marginLeft:'2.3rem',color:'#4d88ff'}} onClick={()=>viewRoom()}>View Rooms</Button>
                 </div>
        </React.Fragment>
     );
};

export default ViewRoom;