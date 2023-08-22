import { Link } from "react-router-dom";
import customFetch from "../../service/api";
import React, { useState, Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [responseData, setResponseData] = useState("Initial Content");


  const get = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await customFetch
        .get(
          `/auth/data/${token}`
        );
      // console.log(res.data);
      setResponseData(`name: ${res.data.name}  & email :${res.data.email}`);
      return;
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };
     const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => get()}>Home:</div>
      <div>{responseData}</div>
      <Fragment>
        <Button onClick={() => navigate("/roomAllotment")}>Aman</Button>
      </Fragment>
      <Link to="/complain">Complain</Link>
    </div>
  );
};
export default Home;

