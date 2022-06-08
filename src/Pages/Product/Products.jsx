import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ProductComp } from '../../Components/Product/ProductComp';
import { productFunc } from "../../Redux/Product/action";
import { useParams } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/NavbarComp";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {Footer} from "../../Components/Footer/Footer"

import "./Products.css";

export const Product = () => {
  const {category} = useParams();
  const dispatch = useDispatch();
  const [filtered,setFiltered] = useState([]);
  console.log("cc",category)
   const productData = useSelector(store => store.product.product);
   const [categoryData,setCategoryData] = useState([]);
   console.log(category)
   useEffect(() => {
    
    dispatch(productFunc());
  
 },[dispatch]);

  
   useEffect(() => {
  
  
     setCategoryData(
       productData.filter((elem) => elem.category===category)
     )
   },[category]);

   const handleFilter = (value) => {
    axios.get(`https://limitless-shore-76001.herokuapp.com/products?category=${category}&brand=${value}`)
         .then((res) => setCategoryData([...res.data]))
         .catch((err) => console.log(err.message))
   }
  
  
   const sorting = (value) =>{
     if(value === "asc")
     {
      setCategoryData((prev) =>[...prev].sort((a,b) => Number(a.discountedPrice)-Number(b.discountedPrice)))
     }
     else if(value==="desc")
     {
       setCategoryData((prev) => [...prev].sort((a,b)=>Number(b.discountedPrice)-Number(a.discountedPrice)))
     }
   }
console.log("cat",categoryData)
   
  return (
    <div className = "main">
    <Navbar></Navbar>
    <div className='topDiv'>
    <div className='filterContainer'>
      {category==="men"? 
      (<select name = "brand" onChange={(e)=> handleFilter(e.target.value)}>
      <option disabled selected>Brand</option>
      <option>Roadster</option>
      <option>Puma</option>
      <option>Nautica</option>
     
    </select>) :  
    (<select name = "brand" onChange={(e) => handleFilter(e.target.value)}>
      <option disabled selected>Brand</option>
      <option>Khushal K</option>
      <option>Libas</option>
      <option>Fabindia</option>
      
    </select>) 
    }
      
      {/* <select name="size" onChange={(e) => setFilter(e.value)}>
      <option disable>Size</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
     
     
    </select> */}
    
    </div>
    <div className='SortContainer'>
    <select onChange={(e) => sorting(e.target.value)}>
      <option selected value="" disabled>Sort</option>
      <option value="asc">Price(asc)</option> 
      <option value="desc">Price(desc)</option>
    </select>
    </div>
    
  </div>
  
  <div className = "filter">
    <div className='container' >
     {
       categoryData===[] ? "Loading" : categoryData.map((e) => <ProductComp key={e._id} data={e} cat={category}/>)
     }
   
      </div>
      </div>
      <Footer></Footer>
      </div>
  )
}
