import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import customFetch from "../service/api";
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  maxWidth: 400,
}));


const Complain = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [list,setList] = useState([]);
  const getComplains = async () => {
    
    try {
      let res;
      if (role==="student"){
        res = await customFetch.get(`/api/v1/getSingleComplain/${token}`);
      }else if (role==="admin"){
        res = await customFetch.get(`/api/v1/getAllComplains`);
      }
      // alert("Complaint sent Successfully");
      // console.log(res.data);
      setList(res.data);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };

  const resolve = async(_id)=>{
    // eslint-disable-next-line no-restricted-globals
    let input = confirm("Do you want to proceed?");
    if(input){
      try {
        const res = await customFetch.delete(`api/v1/deleteComplain/${_id}`);
        if(res.data.success){
          getComplains();
        }
      }catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  }
}
   useEffect(() => {
    getComplains();
   }, []); 
  return (
    <>
      <div>Complain</div>
      <Link to="/ComplainForm">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>

      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        {list.map((item, index) => (
          <Item sx={{ my: 1, mx: "auto", p: 2 }}>
            <Stack spacing={2} direction="row" alignItems="center">
              <Avatar sx={{ background: "#2874f0" }}>{index + 1}</Avatar>
              <Typography noWrap>{item.title}</Typography>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => resolve(item._id)}
              >
                Resolved
              </Button>
            </Stack>
            <p>{item.desc}</p>
            <hr />
            <p>{item.date}</p>
            {
              (item.assigned==="student")?
              <p>This issue has been resolved</p>:
              <p></p>
            }
          </Item>
        ))}
      </Box>
    </>
  );
};
export default Complain;