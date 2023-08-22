import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import customFetch from "../../service/api.jsx";
// import { DataContext } from "../../context/DataProvider";

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

const loginInitialValues = {
  email: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  roll: "",
  email: "",
  phone: "",
  password: "",
  bloodGrp: "",
  hostel: "",
  batch: "",
  branch: "",
  role: "student",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [cookies, setCookies] = useCookies(["token"]);
  const [account, toggleAccount] = useState("login");
  const [h, setH] = useState("");

  const handleChange = (e) => {
    setH(e.target.value);
    setLogin({ ...login, hostel: e.target.value });
    setSignup({ ...signup, hostel: e.target.value });
  };

  const navigate = useNavigate();
  //   const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png";

  useEffect(() => {
    showError(true);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    console.log(signup);
    try {
      await customFetch.post("/auth/register", signup);
      alert("Registration Successful");
      return navigate("/home");
      //   return toggleSignup();
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };
  const loginUser = async () => {
    console.log(login);
    try {
      const res = await customFetch.post("/auth/login", login);
      console.log(res);
      if (res.data.success) {
        alert("Login Successful");

        setCookies("token", res.data.token);
        window.localStorage.setItem("_id", res.data.user._id);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("role", res.data.user.role);
        return navigate("/home");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.email}
              onChange={(e) => onValueChange(e)}
              name="email"
              label="Enter Registered Email"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />

            {error && <Error>{error}</Error>}

            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton
              onClick={() => toggleSignup()}
              style={{ marginBottom: 50 }}
            >
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="roll"
              label="Enter Roll No."
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone No."
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="bloodGrp"
              label="Enter Blood Group"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="batch"
              label="Enter Batch"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="branch"
              label="Enter Branch"
            />
            <FormControl variant="standard" sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Hostel
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={h}
                onChange={handleChange}
                label="Hostel"
                name="hostel"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="BH1">BH1</MenuItem>
                <MenuItem value="BH2">BH2</MenuItem>
                <MenuItem value="GH1">GH1</MenuItem>
              </Select>
            </FormControl>
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
