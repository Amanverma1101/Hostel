import React ,{useState} from 'react';
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"
import { Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import customFetch from "../../service/api";
const DeleteRoom = () => {
    
    const [room, setRoom] = useState("")
    const [hostel, setHostel] = useState("")
    
    const deleteRoom=async()=>{  
        if(room==="" || hostel==="")
        {
            return alert("Please Enter Room No and Hostel !")
        }
        

        try {
            const response=await customFetch.delete(`/api/v1/room/${room}/${hostel}`);
            console.log(response);
            alert("Room Deleted!");
            setRoom("");
            setHostel("");
        } catch (error) {
            console.log(error);
               alert(error?.response?.data?.msg);
               return error;
        }
    }
    const handleReset=()=>{
        setRoom("");
        setHostel("");
    }
    
    return (
        <React.Fragment>
            <Typography align="center" style={{fontSize:'3rem',marginTop:'5rem',color:'tomato'}}>DELETE ROOM</Typography>
                <TextField 
                    label="Room"
                    onChange={e => setRoom(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3,width:'18rem'}}
                    
                    value={room}
                 />
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
                 <Button variant="outlined" color="secondary" type="submit" style={{marginLeft:'1.1rem',color:'red'}} onClick={()=>deleteRoom()}>Delete Room</Button>
                 </div>
        </React.Fragment>
    );
};

export default DeleteRoom;