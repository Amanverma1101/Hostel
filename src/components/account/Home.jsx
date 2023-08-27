import { Link } from "react-router-dom";
import customFetch from "../../service/api";
import React, { useState, Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const role=localStorage.getItem('role');

  const roomAllotmentNavigation=()=>{
      if(role==='admin')
      {
         navigate('/roomAllotmentAdmin');
      }   
      else
      {
        navigate('/roomAllotment');
      }
  }

  return (
    <div>
      <h1>Home</h1>
      <Fragment>
        <Button onClick={()=> roomAllotmentNavigation()}>Room Allotment</Button>
      </Fragment>
      <Link to="/complain">Complain</Link>
      <br />
      <Link to="/noticeBoard">Notices</Link>
    </div>
  );
};
export default Home;