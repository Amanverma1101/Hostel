import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div >Home</div>
      <Fragment>
        <Button onClick={() => navigate("/roomAllotment")}>Aman</Button>
      </Fragment>
      <Link to="/complain">Complain</Link>
    </div>
  );
};
export default Home;

