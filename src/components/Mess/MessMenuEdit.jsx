import React, { Fragment ,useState} from 'react';
import {Typography,Button,TextField, ListItem} from "@mui/material";
import { MenuItem } from "@material-ui/core";
import customFetch from '../../service/api';
import { toast } from "react-toastify";

const MessMenuEdit = () => {
    
    const [day, setDay] = useState("");
    const [mealTime, setMealTime] = useState("");
    const [currMeal,setCurrMeal]=useState([]);
    const [foodItems, setFoodItems] = useState(['', '', '', '', '']);

    const handleChange = (event, index) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index] = event.target.value;
    setFoodItems(updatedFoodItems);
  };

    const handleSubmit = async(event) => {
    
        event.preventDefault();
    try {
        const response=await customFetch.patch('api/v1/mess/updateMenu',{
        day:day,
        mealTime:mealTime,
        food:foodItems,});
        setCurrMeal(response.data.currentMeal.food);
        toast.success("Menu Updated !")
    } catch (error) {
         console.log(error);
               toast.error(error?.response?.data?.msg);
               return error;
    }
  };
    
    const handleReset=()=>{
        setDay("");
        setMealTime("");
        setCurrMeal([]);
    } 
    
    const seeMenu=async(e)=>{  
        
        e.preventDefault();

        if(day==="" || mealTime==="")
        {
            return alert("Please Enter Day and Meal Time !")
        }

        try {
            const response=await customFetch.get(`/api/v1/mess/${day}/${mealTime}`);
            // console.log(response);
            setCurrMeal(response.data.food.food);
        } catch (error) {
               console.log(error);
               toast.error(error?.response?.data?.msg);
               return error;
        }
    }

    return (
       <Fragment>
            <Typography align="center" style={{fontSize:'3rem',marginTop:'3rem',color:'tomato'}}>Edit Menu</Typography>
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
                 <Button variant="outlined" color="secondary" type="submit" style={{color:'#4d88ff',height:'3.4rem'}} onClick={(e)=>seeMenu(e)}>See Menu</Button>
                 </div>
                {currMeal.length>0 && <div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'1.5rem'}}>
                        <Typography style={{color:'tomato',fontSize:'2rem',marginRight:'4rem'}}>Current Meal</Typography>
                        <Typography  style={{color:'tomato',fontSize:'2rem'}}>New Meal</Typography>
                 </div>
                 <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:'4rem'}}>
                    <div style={{width:'20rem',border:'2px solid gray',borderRadius:'10px'}}>
                        {
                            currMeal && currMeal.map((foodItem)=>(
                                <ListItem style={{display:'flex',justifyContent:'center',fontSize:'1.2rem'}}>{foodItem}</ListItem>
                            ))
                        }
                    </div>
                    <div style={{width:'20rem',height:'20rem',border:'2px solid gray',borderRadius:'10px'}}>
                       <form onSubmit={handleSubmit}>
        {foodItems.map((value, index) => (
          <TextField variant="outlined" onChange={(e) => handleChange(e, index)}
              placeholder={`Enter food item ${index + 1}...`} value={value} fullWidth/>
        ))}
        <Button type="submit" variant="contained" fullWidth style={{background:'tomato' ,height:'2.39rem'}}>Update Menu</Button>
      </form>
                    </div>
                 </div>
                 </div>}
        </Fragment>
    );
};

export default MessMenuEdit;
