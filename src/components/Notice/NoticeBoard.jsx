import React ,{ useEffect, useState } from 'react';
import {Box,Paper,Stack,Typography,Button,Avatar,Grid} from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

const NoticeBoard = () => {
    
    
    return (
        <div style={{position:'absolute',width:'800px',height:'600px',top:'50%',left:'50%',padding:'20px',backgroundColor:'tomato',border:'30px solid #802b00',color:'white',transform:'translateX(-50%) translateY(-50%)',borderRadius:'35px'}}>
            <Grid xs={12} style={{borderBottom:'3px solid #802b00'}}>
                 <Typography align='center' style={{color:'#802b00',fontSize:'50px'}}>Notice Board</Typography>
            </Grid>
            <Grid container xs={12} style={{overflowY:'auto',position:'absolute',overflowX:'hidden',maxHeight:'500px',padding:'2rem',display:'block'}}>
                
               
            </Grid>
        </div>
    );
};

export default NoticeBoard;