import MessTable from './MessTable.jsx';
import React ,{ Fragment} from 'react';
import {Typography,Button,Grid} from "@mui/material";
import {useNavigate} from 'react-router-dom';
const MessMenu = () => {
    const navigate=useNavigate();
    const role = localStorage.getItem("role");
    const isMessComitee = localStorage.getItem("isMessComitee") === "true";
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
        {(role!=="student" || isMessComitee )?<Button  variant='contained' style={{position: 'absolute', bottom: '20px', left: '20%', transform: 'translateX(-80%)'}} onClick={()=>navigate('/messMenuEdit')}>Edit</Button>:<></>}
            
            <Button  variant='contained' style={{position: 'absolute', bottom: '20px', left: '80%', transform: 'translateX(-40%)'}} onClick={()=>navigate('/messComitee')}>{(role!=="student" || isMessComitee )?<div>Manage&nbsp;</div>:<div>View &nbsp; </div>} Mess Comitee</Button>
            <Button  variant='contained' style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}} onClick={()=>navigate('/messComplain')}>{(role!=="student" || isMessComitee )?<div>Manage&nbsp;</div>:<div>Raise&nbsp; </div>} Complain</Button>
        </div>
        <div>
            
        </div>
        </Fragment>
    );
};

export default MessMenu;