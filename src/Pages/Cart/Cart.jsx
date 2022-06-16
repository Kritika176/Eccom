import React, { useEffect } from "react";
import "./Cart.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeItem,updateQuantity } from "../../Redux/Cart";
import {Footer} from "../../Components/Footer/Footer"

const StyleButton = styled(Button)({
  width: "20%",
  padding: "10px",
  fontWeight: "600px",
  cursor: "pointer",
  color: "black",
  margin: "auto",
});
 export const Cart = () => {
  
  const navigate = useNavigate();
 
  const [cartData, setCartData] = useState([]);
  const [quant, setQuant] = useState(0);

  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("id");
  useEffect(() => {
    axios
      .get("https://shrouded-reaches-37639.herokuapp.com/cart")
      .then((res) => {
        res.data = res.data.filter((e) => e.userId == userId)
        setCartData([...res.data]);
      })
      .catch((error) => console.log(error.message));
  }, [quant,total]);
  useEffect(() => {
    let totalAmount = 0;
    
    for(let i=0;i<cartData.length;i++)
    {
        totalAmount+=cartData[i].discountedPrice*cartData[i].quantity;
        
    }
    setTotal(totalAmount);
  },[cartData])
 
  const cart = useSelector(store => store.cart.product)
  console.log("fianl",cart)

  const handleQuantity = (type, quantity, id) => {
   
    if(quantity === 1 && type === 'dec') {
      console.log("iieiieieie",id)
      dispatch(removeItem(id))
      axios.delete(`https://shrouded-reaches-37639.herokuapp.com/cart/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log("d",res.data);  
      setQuant(quant + 1);
      })
    }else if (type === "dec" && quantity > 0) {
      
             
      let data = {
        quantity: quantity - 1,

      };
      axios
        .patch(`https://shrouded-reaches-37639.herokuapp.com/cart/${id}`, data)
        .then((res) => console.log(res.data));
        setQuant(quant - 1);

        dispatch(updateQuantity({id:id,quantity:quantity-1}))
    } else if (type === "inc" && quantity<=10) {
    
    
     
      
      let data = {
        quantity: quantity + 1,
      };
      setQuant(quant+1);
      axios
        .patch(`https://shrouded-reaches-37639.herokuapp.com/cart/${id}`, data)
        .then((res) => console.log(res.data));
    }
    dispatch(updateQuantity({id:id,quantity:quantity-1}))
  };
   const handleRemove = (id) =>{
    dispatch(removeItem(id))
    
        axios.delete(`https://shrouded-reaches-37639.herokuapp.com/cart/${id}`)  
        .then(res => {  
           
          console.log("remove",res.data);
            
          
       
        })
        setQuant(quant + 1);
       
   }

   


  return (
    
    <div className="main_box">
      <div className="wrapper">
        <h1 className="title">Cart</h1>
        <div className="top">
          
          <StyleButton onClick={() => {navigate("/")}}>CONTINUE SHOPPING</StyleButton>
        </div>
        <div className="bottom">
          <div className="info">
            {
              cartData.map((elem) => (
                  <div className="product" key={elem._id}>
                    <div className="productDetail">
                      <img src={elem.image} alt=""></img>
                      <div className="details">
                        <h4 className="cartBrand">{elem.brand}</h4>
                        <h6 className="cartName">{elem.name}</h6>
                        <div className="cartSize">{`Size:${elem.size}`}</div>
                      </div>
                    </div>

                    <div className="priceDetail">
                      <div className="quantity">
                        <AddIcon
                          onClick={() =>
                            handleQuantity(
                              "inc",
                              elem.quantity,
                              elem._id,
                             
                            )}
                        ></AddIcon>
                        <div
                          className="quant"
                        >
                          {elem.quantity}
                        </div>
                        <RemoveIcon
                       
                          onClick={() =>
                            handleQuantity(
                              "dec",
                              elem.quantity,
                              elem._id,
                             
                            )
                          }
                        ></RemoveIcon>
                      </div>
                      <div className="p">
                        <div className="price">{`Rs.${Number(
                          elem.discountedPrice
                        )}`}</div>
                      </div>
                    </div>
                    <StyleButton
                      variant="outlined"
                      onClick={() =>handleRemove(elem._id)}
                    >
                      Remove
                    </StyleButton>
                  </div>
                ))
              }
          </div>
          <div className="summary">
            <div className="summaryText">Subtotal</div>
            {total!==0 ? (
              <div className="summaryTotal">{`Rs.${total}`}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="button">
        <StyleButton variant="outlined" onClick={() => {
      
          navigate("/checkout")} } disabled={total===0} >
          PLACE ORDER
        </StyleButton>
      </div>
      <Footer></Footer>
    </div>
    
   );
 };
