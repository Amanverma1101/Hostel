import React, { Fragment, useEffect, useState } from 'react';
import customFetch from "../service/api.jsx";
import { Button, Typography } from '@mui/material';
import RoomButton from '../common/RoomButton.jsx';

const RoomAllotment = () => {
    

    const [rooms,setRooms]=useState([]);
    const [hostel,setHostel]=useState("");
    const userId=localStorage.getItem('_id');

    const getRoomsForUser = async () => {
        try {
       const response= await customFetch.get(`/api/v1/room/all/user/${userId}`);
       //alert("All Room Fetching Successful");
       setRooms(response.data.rooms);
       setHostel(response.data.rooms[0].hostel);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };
   
    useEffect(()=>{
    getRoomsForUser();
},[])

    return (  
          <Fragment>
            <Typography style={{fontSize:'75px',textAlign:'center'}}>All Rooms : {hostel}</Typography> 
            <div style={{display:'flex',flexDirection:'row',margin:'20px 50px'}}>
               {rooms && rooms.map((room)=>(
               <RoomButton roomNo={room.roomNo} roomId={room._id} btnColor={room.roomUser.length}/>
            ))}
            </div>
          </Fragment>
    );
};

export default RoomAllotment;