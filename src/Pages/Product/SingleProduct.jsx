import axios from 'axios';
import "./SingleProduct.css"
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/NavbarComp"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../Redux/Cart';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import {Footer} from "../../Components/Footer/Footer"

const StyledButton = styled(Button)({
  width:"60%",
 margin:"40px 20px",
 fontSize:"120%"
 
 

}) ;

export const SingleProduct = () => {
  const cart = useSelector(store =>store.cart.product)
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[product,setProduct] = useState({});
  const user = useSelector(store => store.login);
  
  const userId = sessionStorage.getItem("id");
  console.log("ied",id)
  useEffect(() => {
    axios.get( `https://shrouded-reaches-37639.herokuapp.com/products/${id}`)
    .then((res) => {setProduct(res.data)
             
    })
    .catch((err) => console.log(err.message))
  },[id,cart])

  const [cartData,setCartData] = useState({
   
  
  });
  
  const handleChange = (e) => {
    
  
    const name = e.target.name;
    const value = e.target.value;
    setCartData({
    
    ...cartData,
    userId:userId,
    name:product.name,
    brand:product.brand,
    discountedPrice:product.discountedPrice,
    quantity:1,
    image:product.image,
    [name]:value
     
    }
    )
  }
  
   const handleSubmit = () => {
     
     if(userId==null)
     {
          navigate("/login");
     }
      dispatch(addProduct(cartData))
        
      axios.post((`https://shrouded-reaches-37639.herokuapp.com/cart`),cartData)
    .then(res => console.log("resu",res))
    .catch(err => err.message)
   }
   console.log("c",cartData)
  
 console.log("cartDataa",cartData)
  return (
   
  <div className='main'>
 
  <Navbar badge={cartData}></Navbar>
  

   <div className="SingleProductContainer">
     <div className="imageContainer">
     
       <img src={product.image} alt="" style={{"width":"80%","height":"80%"}}></img>
     
     </div>
     <div className="descriptionContainer">
       <div className="brand">{product.brand}</div>
       <div className="name">{product.name}</div>
        <div className="price">{`Rs.${product.discountedPrice}`}</div>
        <div className = "filterMain">
        <div className="filterBox">
          
         
          <div className="filter">
        
           {
             product.productsizeButton!=="XS"?<button className='btn' value="S" onClick={handleChange} name="size">S</button>:<button  className='btn' name="size" value="XS" onClick={handleChange}>{product.productsizeButton}</button>
           }
           
          
           {
             product.productsizeButton2!=="S"?<button  className='btn' value="M" onClick={handleChange} name="size">M</button>:<button  className='btn' name="size" value="S" onClick={handleChange}>{product.productsizeButton2}</button>
           }
           {
             product.productsizeButton3!=="M"?<button  className='btn' value="L" onClick={handleChange} name="size">L</button>:<button   className='btn' name="size" value="M" onClick={handleChange}>{product.productsizeButton3}</button>
           }
           {
             product.productsizeButton4!=="L"?<button  className='btn' value="XL" onClick={handleChange} name="size">XL</button>:<button   className='btn' name="size" value="L" onClick={handleChange}>{product.productsizeButton4}</button>
           }
           {
             product.productsizeButton5!=="XL"?<button  className='btn' value="XXL" onClick={handleChange} name="size">XXL</button>:<button  className='btn' name="size" value="XL" onClick={handleChange}>{product.productsizeButton5}</button>
           }
           {
             product.productsizeButton6!=="XXL"?null:<button  className='btn' name="size" value="XXL" onClick={handleChange}>{product.productsizeButton6}</button>
           }
          
          </div>
         
        </div>
        </div>
        <div className='addContainer'>
        
          
        </div>
        
        <StyledButton variant="contained" onClick={ handleSubmit} disabled={!cartData.size}>
           ADD TO CART
    </StyledButton>
   

</div>
   </div>
   <Footer></Footer>
  </div>
  
  )
    }



