import MessTable from './MessTable.jsx';
import React ,{ Fragment} from 'react';
import {Typography,Button,Grid} from "@mui/material";
import {useNavigate} from 'react-router-dom';
const MessMenu = () => {
    const navigate=useNavigate();
    return (
        <Fragment>
        <div style={{position:'absolute',width:'80rem',height:'30rem',top:'50%',left:'50%',padding:'20px',backgroundColor:'#802b0018',border:'30px solid #802b00',color:'white',transform:'translateX(-50%) translateY(-50%)',borderRadius:'35px'}}>
            <Grid xs={12} style={{borderBottom:'3px solid #802b00'}}>
                 <Typography align='center' style={{color:'#802b00',fontSize:'50px'}}>Mess Menu</Typography>
            </Grid>   
            <Grid container xs={12} style={{overflowY:'auto',position:'absolute',overflowX:'hidden',maxHeight:'25rem',padding:'2rem',display:'block',paddingLeft:'1rem',}}>
            <MessTable/>
            </Grid>
        </div>
        <div>
            <Button  variant='contained' style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}} onClick={()=>navigate('/messMenuEdit')}>EDit</Button>
        </div>
        </Fragment>
    );
};

export default MessMenu;