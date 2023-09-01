import React ,{useState,useEffect, Fragment}from 'react';
import customFetch from "../service/api.jsx";
import {useParams} from "react-router-dom";
import {Grid, Typography,Box, Divider, Button} from "@material-ui/core"
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    
    flexDisplay:{
          display: 'flex',
          flexDirection: 'row'
    },
    textHeader:{
          fontSize:'60px',
          marginLeft:'20px'
    },
    boxProp:{
        width:'300px',
        height:'400px',
        background:'white',
        border:'10px solid #4d88ff',
        borderRadius:'30px',
        marginLeft:'10rem',
        padding:'2rem'
    }
})

const RoomDetail = () => {
    
     const params=useParams();
     const roomId=params.roomId;
     const userId=localStorage.getItem('_id');
     const style=useStyles();

     const [room,setRoom]=useState();
     const [roomUser,setRoomUser]=useState([]);
     const [userData1,setUserData1]=useState([]);
     const [userData2,setUserData2]=useState([]);
     
     const getSingleRoom = async () => {
        try {
       const response= await customFetch.get(`/api/v1/room/${roomId}`);
       setRoom(response.data.room);
       setRoomUser(response.data.room.roomUser);
       //console.log(response);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };
    
    const userRoomAllotment=async()=>{
        try {  
            const response=await customFetch.patch(`/api/v1/userRoomAllotment/${roomId}`,{userId:userId});
            setRoomUser(response.data.room.roomUser);
            //console.log(response);
        } catch (error) {
            console.log(error);
               alert(error?.response?.data?.msg);
               return error;
        }
    }
    const getRoomUser1=async(id)=>{
            try {
                const response= await customFetch.get(`/api/v1/user/${id}`);
                //console.log(response);
                setUserData1(response.data.user);
            } catch (error) {
               console.log(error);
               alert(error?.response?.data?.msg);
               return error;
            }
        }
        const getRoomUser2=async(id)=>{
            try {
                const response= await customFetch.get(`/api/v1/user/${id}`);
                //console.log(response);
                setUserData2(response.data.user);
            } catch (error) {
               console.log(error);
               alert(error?.response?.data?.msg);
               return error;
            }
        }
  useEffect(()=>{
    if(roomId)
    getSingleRoom();
},[])

  useEffect(()=>{
    if(roomUser && roomUser.length>0)
    getRoomUser1(roomUser[0].userId);
    if(roomUser && roomUser.length>1)
    getRoomUser2(roomUser[1].userId);
  },[roomUser])

    return (    
        <Fragment>

            <div style={{background:"#4d88ff",height:'5rem'}}>
               <Typography align='center' style={{fontSize:'3.7rem',paddingTop:'0.4rem',color:'whitesmoke'}}>
                Room Details
               </Typography>
            </div>

            {room && roomUser && <Grid xs={12} style={{ display: 'flex', flexDirection: 'row' ,marginTop:'2rem'}} >
                <Grid xs={6} style={{marginLeft:'12rem'}}>
                    <Typography style={{fontSize:'30px',
          marginLeft:'20px'}}>Room : {room.roomNo}</Typography>
           <Typography style={{fontSize:'30px',
          marginLeft:'20px'}}>Status : {roomUser.length==2?'Full':'Partly Full'}</Typography>
                    </Grid> 
                <Grid xs={6} style={{marginLeft:'12rem'}}>
                    <Typography style={{fontSize:'30px',
          marginLeft:'20px'}}>Hostel : {room.hostel}</Typography>
           <Typography style={{fontSize:'30px',
          marginLeft:'20px'}}>Floor : {roomUser.length}</Typography>
          </Grid> 
            </Grid>}
           
           <Divider variant='middle' style={{height:'2px',background: "#4d88ff",marginTop:'1rem'}}/>
           <Typography align='center' style={{fontSize:'2.7rem',padding:'0.6rem',}}>Occupants</Typography>
           <Divider variant='middle' style={{height:'2px',background: "#4d88ff",}}/>

            <Grid  xs={12} style={{ display: 'flex', flexDirection: 'row',marginTop:'5rem',justifyContent:'space-between'}}>
                {userData1 && <Grid xs={6}>
                    <Box className={style.boxProp}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png" height={120} width={120} />
                        </div>
                        <Grid xs={12} style={{justifyContent:'center',alignItems:'center'}}>
                          <Typography align='center' style={{fontSize:'1.5rem'}}>{userData1.name}</Typography>
                        </Grid>
                        <hr style={{height:'2px',background: "#4d88ff"}}/>
                        <Grid xs={12} style={{display:'flex',flexDirection:'row'}}>
                            <Grid xs={4}>
                                <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Email ID :</Typography>
                                  <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Roll :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Branch :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Batch :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Blood Group :</Typography>
                        </Grid>
                        <Grid xs={8}>
                              <Typography style={{ marginTop: '1rem' ,fontSize:'1.2rem'}}>{userData1.email}</Typography>
                                <Typography style={{ marginTop: '1rem' ,fontSize:'1.2rem'}}>{userData1.roll}</Typography>
                                <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData1.branch}</Typography>
                                 <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData1.batch}</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData1.bloodGrp}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>}
                {userData2 && <Grid xs={6}>
                    <Box className={style.boxProp}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png" height={120} width={120} />
                        </div>
                        <Grid xs={12} style={{justifyContent:'center',alignItems:'center'}}>
                          <Typography align='center' style={{fontSize:'1.5rem'}}>{userData2.name}</Typography>
                        </Grid>
                        <hr style={{height:'2px',background: "#4d88ff"}}/>
                        <Grid xs={12} style={{display:'flex',flexDirection:'row'}}>
                            <Grid xs={4}>
                                <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Email ID :</Typography>
                                  <Typography style={{ marginTop: '1rem' ,fontSize:'1.2rem'}}>Roll :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Branch :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Batch :</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>Blood Group :</Typography>
                        </Grid>
                        <Grid xs={8}>
                              <Typography style={{ marginTop: '1rem' ,fontSize:'1.2rem'}}>{userData2.email}</Typography>
                                <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData2.roll}</Typography>
                                <Typography style={{ marginTop: '1rem' ,fontSize:'1.2rem'}}>{userData2.branch}</Typography>
                                 <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData2.batch}</Typography>
                                   <Typography style={{ marginTop: '1rem',fontSize:'1.2rem' }}>{userData2.bloodGrp}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>}
            </Grid>

            {roomUser && <Button variant='contained' disabled={roomUser.length===2} style={{background:'#4d88ff',color:'white',float:'right',marginRight:'44rem',marginTop:'7rem'}} onClick={()=>userRoomAllotment()}>
                Book Room
            </Button>}
        </Fragment>
    );
};

export default RoomDetail;