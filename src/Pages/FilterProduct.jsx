import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
export default function FilterProduct() {

    const{ catname}=useParams()
     console.log(catname,"catname")
     const[Products, setproduct]=useState([])

    useEffect(()=>{
           axios.get(`https://dummyjson.com/products/category/${catname}`)
          
             .then((res) => {
               console.log(res,"res");
              setproduct(res.data.products)
            
             })
             .catch((error) => {
               console.log(error);
             });
         }, []);
       
         console.log(catname, "catname")
         console.log(Products,"Productdetail")
  return (
    <>
     <Typography gutterBottom
      variant="h4"
      component="div"
       sx={{color:"#1D7D9E" ,textAlign:"center" , margin:"10px"}}>
        {catname}<h2>PRODUCTS</h2>
        </Typography>



    <div
       style={{
       display: "flex",
       flexWrap: "wrap",
      alignItems:"center",
      margin:"25px",
      gap:"30px",
      justifyContent:"center"

       }}    
    
    
    >
        {Products.length>0? Products?.map((item, i)=>{
       return(
        

    
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#1D7D9E"}}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.description} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <h3>  Price:$ {item.price} </h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ background:"#1D7D9E" ,color:"#040000"}}>Share</Button>
        <Button size="small" sx={{ background:"#1D7D9E" ,color:"#040000"}}  >Learn More</Button>
      </CardActions>
    </Card>
       )

    }):"No data found for this category"}
    </div>
    </>
  )
}
