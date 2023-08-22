import { Button } from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";

import { createTheme } from "@mui/material/styles";

const myStyle={
   color:'white',
   marginLeft:'5px',
   marginRight:'15px',
    "&:hover":{
        pointer:'cursor',
    },
    background:'rgba(8, 147, 247, 0.8)',
    // borderRadius:'5px',
    // width:'25px',
    // height:'30px',  
}
const RoomButton = (props) => {

    const navigate=useNavigate();

    let btnColor=props.btnColor==2?'#ff3333': '#4d88ff';
    btnColor=props.btnColor==1?'#ffff00':btnColor;
    return (
        <Button style={{...myStyle,backgroundColor:btnColor}} onClick={()=>navigate(`/roomDetail/${props.roomId}`)} >{props.roomNo}</Button>
    );
};

export default RoomButton;