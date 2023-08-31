import React,{useState,useEffect, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import customFetch from "../../service/api";
import { Typography } from "@material-ui/core";

const weekdays=['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];

const MessTable=()=>{
    
    const [row1,setRow1]=useState([]);
    const [row2,setRow2]=useState([]);
    const [row3,setRow3]=useState([]);
    const [row4,setRow4]=useState([]);
    const [row5,setRow5]=useState([]);
    const [row6,setRow6]=useState([]);
    const [row7,setRow7]=useState([]);
    

    const fetchData1=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow1(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData2=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow2(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData3=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow3(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData4=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow4(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData5=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow5(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData6=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow6(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }
    const fetchData7=async(day)=>{
        try {
            const response= await customFetch.get(`/api/v1/mess/getFoodByDay/${day}`);
            console.log(response.data.food);
            setRow7(response.data.food);
           
        } catch (error) {;
             console.log(error);
      alert(error?.response?.data?.msg);
      return error;
        }
    }

    useEffect(()=>{
        fetchData1('Monday');
        fetchData2("Tuesday");
        fetchData3('Wednesday');
        fetchData4('Thrusday');
        fetchData5('Friday');
        fetchData6('Saturday');
        fetchData7('Sunday');
    },[])

    return (
        <TableContainer component={Paper} style={{background:'tomato'}}>
            <Table stickyHeader aria-label='simple table' style={{background:'tomato'}}>
                <TableHead style={{background:'tomato'}}>
                    <TableRow style={{background:'tomato'}}>
                        <TableCell style={{fontSize:'1.2rem'}}>Day</TableCell>
                        <TableCell align="center" style={{fontSize:'1.2rem'}}>Breakfast</TableCell>
                        <TableCell align="center" style={{fontSize:'1.2rem'}}>Lunch</TableCell>
                        <TableCell align="center" style={{fontSize:'1.2rem'}}>Snacks & Tea</TableCell>
                        <TableCell align="center" style={{fontSize:'1.2rem'}}>Dinner</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {row1 && row1.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row1[0].day}</TableCell>}
                    {row1 && row1.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row2 && row2.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row2[0].day}</TableCell>}
                    {row2 && row2.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row3 && row3.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row3[0].day}</TableCell>}
                    {row3 && row3.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row4 && row4.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row4[0].day}</TableCell>}
                    {row4 && row4.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row5 && row5.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row5[0].day}</TableCell>}
                    {row5 && row5.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row6 && row6.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row6[0].day}</TableCell>}
                    {row6 && row6.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow> 
                  <TableRow>
                    {row7 && row7.length!=0 && <TableCell style={{fontSize:'1.1rem'}}>{row7[0].day}</TableCell>}
                    {row7 && row7.map((meal)=>(
                        <TableCell align="center">
                            {meal.food && meal.food.map((foodItem)=>(
                                <Typography>{foodItem}</Typography>
                            ))}
                        </TableCell>
                    ))}
                  </TableRow>  
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MessTable;