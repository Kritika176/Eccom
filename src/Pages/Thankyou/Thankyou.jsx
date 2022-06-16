import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {removeProducts} from '../../Redux/Cart';
export function Thankyou() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userId = sessionStorage.getItem("id");
    useEffect(() => {
      dispatch(removeProducts())
      axios.delete(`https://shrouded-reaches-37639.herokuapp.com/cart/${userId}?userId=${userId}`)
      .then((res) => console.log("checkout",res.data))
      
  
 },[]);

  return (
      
    <div style={{"width":"100vw","height":"100vh"}} onClick={()=>navigate("/")}>
     
        <img src=' https://cdn.optinmonster.com/wp-content/uploads/2016/10/simple-thank-you.png' style={{"width":"100%","height":"100vh"}} alt="" ></img>
    </div>
  )
}


