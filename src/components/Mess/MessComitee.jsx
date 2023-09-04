import { useState,useEffect } from "react";
import customFetch from "../../service/api";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { yellow } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const MessComitee = () => {
    const [list, setList] = useState([]);
    const role = localStorage.getItem("role");
    const isMessComitee = localStorage.getItem("isMessComitee") === "true";
    const giveAccess = async(uid) => {
            try {
              const response = await customFetch.patch(`/api/v1/mess/giveAccess/${uid}`);
              console.log(response);
              if (response.data.success) {
                toast.success("Access Granted Successfully.");
                return getUsers();
              } else {
                toast.error("Access Grant Failed");
                return getUsers();
              }
            } catch (error) {
              console.log(error);
              toast.error(error?.response?.data?.msg);
              return error;
            }
    }
    const removeAccess = async(uid) => {
            try {
              const response = await customFetch.patch(`/api/v1/mess/removeAccess/${uid}`);
              if(response.data.success){
                toast.success("Access Removed Successfully.");
                return getUsers();
              }else{
                toast.error("Access Remove Failed");
                return getUsers();
              }
            } catch (error) {
              console.log(error);
              toast.error(error?.response?.data?.msg);
              return error;
            }
    }
    const getUsers = async()=>{
            try {
                const response= await customFetch.get(`/api/v1/mess/getUsers`);
                const list = response.data.users;
                if (role !== "student")
                    {setList(list);}
                  else{
                    const list1 = list.filter((obj) => obj.isMessComitee === true);
                    setList(list1);
                    console.log("hii0");
                  }
            } catch (error) {;
                console.log(error);
                toast.error(error?.response?.data?.msg);
                return error;
            }
    }

        useEffect(() => {
          getUsers();
        }, []);
  return (
    <div>
      <Typography align='center' style={{fontSize:'3.7rem',paddingTop:'0.4rem',color:'black'}}>
                Mess Comitee
               </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {list.map((user,index) => {
            return (
              <>
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={user.isMessComitee ? { minWidth: 275,  background: "yellowgreen" } : { minWidth: 275 }}>
                    <Item sx={user.isMessComitee ? { margin: 2, outline:"3px yellow" } : {}}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                        {user.isMessComitee ?
                          <><RestaurantIcon/>   {user.name}   <RestaurantIcon/></>
                          : user.name
                        }
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {user.roll}
                        </Typography>
                        <Typography variant="body2">
                          Email : {user.email}
                          <br />
                          Phone : {user.phone} & Hostel : {user.hostel}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {(role !== "student" || isMessComitee)?

                        (!user.isMessComitee )? (
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => giveAccess(user._id)}
                          >
                            Give Access
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => removeAccess(user._id)}
                            color="error"
                          >
                            Remove Access
                          </Button>
                        )
                        :
                        <></>
                        }
                      </CardActions>
                    </Item>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
export default MessComitee