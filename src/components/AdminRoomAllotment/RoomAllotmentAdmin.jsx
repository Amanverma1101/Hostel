import { Button, Divider, Grid } from '@material-ui/core';
import {styled,Typography} from "@mui/material";
import React, { Fragment ,useState} from 'react';
import CreateRoom from './CreateRoom.jsx';
import DeleteRoom from "./DeleteRoom.jsx";
import ViewRoom from './ViewRoom.jsx';

const XButton = styled(Button)({
    width:'9rem',
    height:'5rem',
    margin:'4.5rem',
    boxShadow:'1px 1px 1px 1px #F38A0E',
    background:'tomato',
    color:'white',
    "&:hover":{
        background:'#F3800E',
        cursor:'pointer',
    }
})
const RoomAllotmentAdmin = () => {
    
    
    const [comp,setComp]=useState(0);

    return (
        <Fragment>
         <div style={{background:"#4d88ff",height:'5rem',borderBottom:'4px ridge tomato'}}>
               <Typography align='center' style={{fontSize:'3.7rem',paddingTop:'0.4rem',color:'whitesmoke'}}>
                Room Details
               </Typography>
            </div>
        <Grid container>
      <Grid item xs={12} md={4}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,borderRight:'4px ridge tomato'}}>
          <XButton variant='contained' onClick={()=>setComp(0)}>Add Room</XButton>
          <XButton variant='contained' onClick={()=>setComp(1)}>Delete Room</XButton>
          <XButton variant='contained' onClick={()=>setComp(2)}>View Rooms</XButton>
        </div>
      </Grid>
      <Grid item xs={12} md={8}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        {comp===0 && <CreateRoom/>}
        {comp===1 && <DeleteRoom/> }
        {comp===2 && <ViewRoom/> }
        </div>
      </Grid>
    </Grid>
    </Fragment>
    );
};

export default RoomAllotmentAdmin;