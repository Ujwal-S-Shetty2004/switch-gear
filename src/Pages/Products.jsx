import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
 import SearchIcon from '@mui/icons-material/Search';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const[Products, setProducts]=useState([])

useEffect(()=>{
axios.get('https://dummyjson.com/products')
.then((res)=>{
  console.log(res);
  setProducts(res.data.products)
})
.catch((error) => {
  console.log(error);
});

},[]);

console.log(Products,"Productdetails")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleSearch=(e)=>{
    let data= e.target.value;
    data=data.toLowerCase()
    console.log(data);

    axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res)=>{
      console.log(res);
      setProducts(res.data.products)
    }).catch((error)=>{
      console.log(error);
  
    })
  }

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
      <h2> Products </h2>
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent:"flex-end",
        marginRight:"150px"
      }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

        <TextField id="input-with-sx" label="Search for products" variant="standard" sx={{
          width:"500px"
        }} 
         onChange={handleSearch}
        
        />
       
      </Box>
    <div
    style={{
       display: "flex",
       flexWrap: "wrap",
      alignItems:"flex-end",
      margin:"10px",
      gap:"10px",
      justifyContent:"center"

       }}    >


    {Products.length>0?Products.map((item,index)=>{
      return(
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.category}
        sx={{color:"#6B4A8C"}}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>

        <Typography variant="h5" color="text.secondary"  sx={{color:"#6B4A8C"}}>
        <h3>Price: ${item.price}</h3>
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:"#6B4A8C"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{color:"#6B4A8C"}}  />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon  sx={{color:"#6B4A8C"}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      
          <div style={{display:"flex",alignContent:"center",alignItems:"center",gap:"6px"}}>
          <Typography paragraph>BRAND:</Typography>
          <Typography paragraph>
           {item.brand}
          </Typography>
          </div>
          <Typography paragraph>
          <div style={{display:"flex",alignContent:"center",alignItems:"center",gap:"6px"}}>
          <Typography paragraph>Ratings:</Typography>
          <Typography paragraph>
           {item.rating}
          </Typography>
          </div>
          </Typography>
          
          <div style={{display:"flex",alignContent:"center",alignItems:"center",gap:"6px"}}>
          <Typography paragraph>Shipping Information:</Typography>
          <Typography paragraph>
           {item.shippingInformation}
          </Typography>
          </div>
       

         
        </CardContent>
      </Collapse>
    </Card>


      )
    }):"No Data Found"}
     </div>
    </>
  
  );
}
