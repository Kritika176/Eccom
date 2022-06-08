import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import axios from 'axios';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"

}) 
const StyledTypography = styled(Typography)({
    display: "flex",
    justifyContent:"space-around",
    ":hover":{
        cursor:"pointer"
    }
   

}) 
const StyledAppbar = styled(AppBar)({
    backgroundColor:"white",
    color:"black"
})
const userId = sessionStorage.getItem("id");
export const Navbar = () =>{
const [quant,setQuant] = useState(0);
const [badge,setBadge] = useState([])
const navigate = useNavigate();
const cart = useSelector(store=>store.cart.product)
useEffect(() => {
    axios.get("https://limitless-shore-76001.herokuapp.com/cart").then((res) => {

        res.data = res.data.filter((e) => e.userId == userId)
        console.log("dddata",res.data)
        setBadge([...res.data])
    })

},[cart])

//   useEffect(() => {
//     let total = 0;
//     for(let i=0;i<badge.length;i++)
//     {
//        total+=badge[i].quantity 
//     }  
//    setQuant(total)
 
//   },[quant,badge,])
 
  useEffect(() => {
    let total = 0;
    for(let i=0;i<cart.length;i++)
    {
       total+=cart[i].quantity 
    }  
   setQuant(total)
 
  },[quant,badge,cart])
  console.log("quantity",quant)
    return(
        <StyledAppbar position='sticky'>
            
             <StyledToolbar>
             
         <StyledTypography sx={{display:"flex",justifyContent:"space-between",gap:"30px"}}>
         <Link to={"/"}>
         <ShoppingBasketIcon></ShoppingBasketIcon>
         </Link>
             <Link to={`/products/men`}><StyledTypography >
                 MEN
             </StyledTypography>
             </Link>
             <Link to={`/products/women`}><StyledTypography>
                 WOMEN
             </StyledTypography>
             </Link>
         </StyledTypography>
        
         <StyledTypography sx={{display:"flex",justifyContent:"space-between",gap:"30px"}}>
         
             <AccountCircleIcon onClick={() => {
                 navigate("/login")}}></AccountCircleIcon>
             <Link to={"/cart"}>
             <Badge color="primary" badgeContent={quant}>
              <ShoppingCartIcon></ShoppingCartIcon>
               </Badge>
               </Link>
         </StyledTypography>
        </StyledToolbar>
        </StyledAppbar>
    )
}