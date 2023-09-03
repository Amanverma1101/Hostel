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
import customFetch from "../../service/api.jsx";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import ComplainDetail from "../ComplainDetail.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  maxWidth: 600,
}));


const MessComplain = () => {
 const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isMessComitee = (localStorage.getItem("isMessComitee")==='true');
  const [list,setList] = useState([]);
  const getComplains = async () => {
    
    try {
      let res;
      if (role==="student"){
        // res = await customFetch.get(`/api/v1/mess/getSingleMessComplain/${token}`);
        res = await customFetch.get(`/api/v1/getSingleMessComplain/${token}`);
      }else{
        res = await customFetch.get(`/api/v1/mess/getAllComplains`);
      }
      // alert("Complaint sent Successfully");
      console.log(res.data);
      return setList(res.data);
    }  catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  const resolve = async(_id)=>{
    // eslint-disable-next-line no-restricted-globals
    let input = confirm("Do you want to proceed?");
    if(input){
      try {
        const res = await customFetch.delete(`/api/v1/mess/deleteComplain/${_id}`);
        if(res.data.success){
          getComplains();
        }
      }catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
}
const resolveByAdmin = async(_id)=>{
  // eslint-disable-next-line no-restricted-globals
  let input = confirm("Do you want to proceed?");
  if (input) {
    try {
      const res = await customFetch.patch(`/api/v1/mess/updateComplain/${_id}`);
      console.log(res.data);
      if (res.data.success) {
        toast.success("Resolved Successfully");
        return getComplains();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
}
const assignToAdmin = async (_id) => {
  // eslint-disable-next-line no-restricted-globals
  let input = confirm("Do you want to proceed?");
  if (input) {
    try {
      const res = await customFetch.patch(`/api/v1/mess/assignToAdmin/${_id}`);
      console.log(res.data);
      if (res.data.success) {
        toast.success("Assigned to Admin Successfully");
        return getComplains();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
};
const [dataToShow, setDataToShow] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const showFullData = (itemIndex,name,hostel,email,phone,createdAt) => {
    if (expandedItem === itemIndex) {
      setExpandedItem(null);
      setDataToShow({});
    } else {
      setExpandedItem(itemIndex);
      setDataToShow({ name, hostel, email, phone, createdAt }); // Update this with the actual data
    }
  };

   useEffect(() => {
    getComplains();
   },[]); 


  return (
    <>
      <Box
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "h3.fontSize",
        }}
      >
        <div>Mess Complain</div>
        {role === "student" && !isMessComitee ? (
          <Link to="/messComplainForm">
            <Typography
              sx={{
                marginTop: 5,
                textTransform: "capitalize",
                fontSize: "h6.fontSize",
              }}
            >
              Add Complain
            </Typography>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        ) : (
          <></>
        )}
      </Box>

      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        {list.map((item, index) => (
          <Item sx={{ my: 3, mx: "auto", p: 2, boxShadow: 4 }}>
            <Stack
              sx={{ justifyContent: "space-between" }}
              spacing={5}
              direction="row"
              alignItems="center"
            >
              <Avatar sx={{ background: "#2874f0" }}>{index + 1}</Avatar>
              <Typography
                noWrap
                sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
              >
                {item.title}
              </Typography>
              {(item.assigned === "student" && role === "student" && !isMessComitee) ||
              (item.assigned === "messComitee" && (role === "student" && isMessComitee)) ||
              (item.assigned === "admin" && role === "admin") ? (
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() =>
                    (role === "admin") ||
                    (isMessComitee)
                      ? resolveByAdmin(item._id)
                      : resolve(item._id)
                  }
                >
                  Resolve
                </Button>
              ) : (
                <Button disabled variant="contained">
                  Pending by {item.assigned}
                </Button>
              )}
            </Stack>
            <p>{item.desc}</p>
            <hr />
            <p>
              {item.date}
              {(isMessComitee && item.assigned === "messComitee" && role==="student") ? (
                <div
                  onClick={() => assignToAdmin(item._id)}
                  style={{ cursor: "pointer", marginTop: 5, color: "#2874f0" }}
                >
                  Assign to Admin
                </div>
              ) : (
                <></>
              )}
            </p>
            {(item.assigned === "student" && role === "student" && !isMessComitee ) ? (
              <p style={{ color: "green" }}>
                This issue has been resolved and you can close this!
              </p>
            ) : (
              <p></p>
            )}

            {role !== "student" ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() =>
                    showFullData(
                      index,
                      item.name,
                      item.hostel,
                      item.email,
                      item.phone,
                      item.createdAt
                    )
                  }
                >
                  {expandedItem === index ? "Hide Details" : "Show Details"}
                </Button>
                {expandedItem === index && <ComplainDetail data={dataToShow} />}
              </>
            ) : (
              <></>
            )}
          </Item>
        ))}
      </Box>
    </>
  );
};
export default MessComplain