import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions,Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import axios from "axios"
import {useEffect, useState} from 'react'



export default function Category() {
  const [categories, setCategories] = useState([]); // Correctly declare state

  useEffect(() => {
    
    axios.get("https://dummyjson.com/products/categories")
   
      .then((res) => {
        console.log(res,"res");
        setCategories(res.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(categories,"categories");
  return (
<>
    <Typography gutterBottom
    variant="h4"
    component="div"
     sx={{color:"#1D7D9E" ,
      alignItems:"center",
       justifyContent:"center" ,
        margin:"10px", 
        display:"flex",
         padding:"10px"
         }}>
      <h2> Browse Product Categories</h2>
      </Typography>





    <Grid container spacing={2} 
    sx={{
      display: "flex",
      flexWrap: "wrap",
     alignItems:"center",
     margin:"6px",
   
     justifyContent:"center"




    }}>
    {categories.map((item,i)=>{
      return(
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 , backgroundColor:"#A890FE"}}>
      <CardActionArea>
        <CardContent>
          <Link to={`/cat-product/${item.name}`}><Typography gutterBottom variant="h5" component="div">
            {item.name} 
          </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
      )
    })}
    </Grid>
    </>
    );
}