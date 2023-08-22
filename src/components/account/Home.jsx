import React, { useState, useEffect, Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  
  const navigate=useNavigate();
  return (
    <Fragment>
      <Button onClick={()=>navigate('/roomAllotment')}>Aman</Button>
    </Fragment>
  )
}
export default Home