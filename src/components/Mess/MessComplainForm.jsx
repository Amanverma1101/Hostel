import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import customFetch from "../../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Component = styled(Box)`
   width: 400px;
   margin: auto;
   box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
 `;

 const Image = styled("img")({
   width: 100,
   display: "flex",
   margin: "auto",
   padding: "50px 0 0",
 });

 const Wrapper = styled(Box)`
   padding: 25px 35px;
   display: flex;
   flex: 1;
   overflow: auto;
   flex-direction: column;
   & > div,
   & > button,
   & > p {
     margin-top: 20px;
   }
 `;

 const LoginButton = styled(Button)`
   text-transform: none;
   background: #fb641b;
   color: #fff;
   height: 48px;
   border-radius: 2px;
 `;

 const SignupButton = styled(Button)`
   text-transform: none;
   background: #fff;
   color: #2874f0;
   height: 48px;
   border-radius: 2px;
   box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
 `;

 const Text = styled(Typography)`
   color: #878787;
   font-size: 12px;
 `;

 const Error = styled(Typography)`
   font-size: 10px;
   color: #ff6161;
   line-height: 0;
   margin-top: 10px;
   font-weight: 600;
 `;
  const complainInitialValues = {
    hostel: "",
    title: "",
    desc: "",
    phone: "",
  };

const MessComplainForm = () => {
  const [complain, setComplain] = useState(complainInitialValues);
  // const [error, showError] = useState("");
    const navigate = useNavigate();
  const imageURL = "https://static.thenounproject.com/png/980150-200.png";
  
  const token = localStorage.getItem("token");
  const onInputChange = (e) => {
    setComplain({ ...complain, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    // console.log(complain);
    try {
      const res = await customFetch.post(`/api/v1/mess/registerComplain/${token}`, complain);
      if(res.data.success){
      toast.success("Complaint sent Successfully");
      return navigate('/messComplain');
      }else{
        toast.warning("Complain Not Submitted");
        return navigate("/messComplainForm");
      }
      //   return toggleSignup();
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.msg);
      return navigate("/messComplainForm");
    }
  };  
  return (
    <>
      <div>Mess Complain Form</div>
      <Component>
        <Box>
          <Image src={imageURL} alt="blog" />
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="hostel"
              label="Enter hostel"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="title"
              label="Enter Subject"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="desc"
              label="Describe your Consent briefly"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Contact No."
            />
            <SignupButton onClick={() => submit()}>Submit</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton
              variant="contained"
              onClick={() => navigate("/messComplain")}
            >
              Go Back
            </LoginButton>
          </Wrapper>
        </Box>
      </Component>
    </>
  );
};
export default MessComplainForm