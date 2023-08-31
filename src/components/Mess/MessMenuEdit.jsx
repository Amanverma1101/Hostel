import React, { Fragment ,useState} from 'react';
import {Box,Paper,Stack,Typography,Button,Avatar,TextField} from "@mui/material";
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import customFetch from '../../service/api';

const MessMenuEdit = () => {
    
    const [day, setDay] = useState("");
    const [mealTime, setMealTime] = useState("");
    const [currMeal,setCurrMeal]=useState([]);
    const [newMeal,setNewMeal]=useState([]);
    
    const handleReset=()=>{
        setDay("");
        setMealTime("");
    } 
    
    const seeMenu=async()=>{  
        if(day==="" || mealTime==="")
        {
            return alert("Please Enter Day and Meal Time !")
        }

        try {
            const response=await customFetch.get(`/api/v1/mess/${day}/${mealTime}`);
            // console.log(response);
            setCurrMeal(response.data.food.food);
            console.log(response.data.food.food);
            setDay("");
            setMealTime("");
        } catch (error) {
               console.log(error);
               alert(error?.response?.data?.msg);
               return error;
        }
    }

    return (
       <Fragment>
            <Typography align="center" style={{fontSize:'3rem',marginTop:'5rem',color:'tomato'}}>Edit Menu</Typography>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TextField 
                    label="Day"
                    onChange={e => setDay(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    sx={{mb: 3,width:'18rem'}}
                    value={day}
                    select
                 >
                    <MenuItem value="Monday">Monday</MenuItem>
                    <MenuItem value="Tuesday">Tuesday</MenuItem>
                   <MenuItem value="Wednesday">Wednesday</MenuItem>
                   <MenuItem value="Thrusday">Thrusday</MenuItem>
                   <MenuItem value="Friday">Friday</MenuItem>
                   <MenuItem value="Saturday">Saturday</MenuItem>
                   <MenuItem value="Sunday">Sunday</MenuItem>
                 </TextField>
                 <TextField 
                    label="MealTime"
                    onChange={e => setMealTime(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={mealTime}
                    select
                    sx={{mb: 3,width:'18rem'}}
                 >
                    <MenuItem value="1">Breakfast</MenuItem>
                    <MenuItem value="2">Lunch</MenuItem>
                   <MenuItem value="3">Snacks</MenuItem>
                   <MenuItem value="4">Dinner</MenuItem>
                 </TextField>

                <Button variant="outlined" color="secondary" type="reset" style={{color:'red',height:'3.4rem'}} onClick={()=>handleReset()}>Reset</Button>
                 <Button variant="outlined" color="secondary" type="submit" style={{color:'#4d88ff',height:'3.4rem'}} onClick={()=>seeMenu()}>See Menu</Button>
                 </div>
                {currMeal.length>0 && <div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'4rem'}}>
                        <Typography style={{color:'tomato',fontSize:'2rem',marginRight:'4rem'}}>Current Meal</Typography>
                        <Typography  style={{color:'tomato',fontSize:'2rem'}}>New Meal</Typography>
                 </div>
                 <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'4rem'}}>
                    <div style={{width:'25rem',height:'10rem',border:'2px solid gray',borderRadius:'10px'}}>
                        {
                            currMeal && currMeal.map((foodItem)=>(
                                <Typography align='center'style={{margin:'0.5rem',fontSize:'1rem',color:'tomato'}}>{foodItem}</Typography>
                            ))
                        }
                    </div>
                    <div style={{width:'25rem',height:'10rem',border:'2px solid gray',borderRadius:'10px'}}>
                        <input type='text' placeholder="Enter food item..."
                        />
                    </div>
                 </div>
                 </div>}
        </Fragment>
    );
};

export default MessMenuEdit;
