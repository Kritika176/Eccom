import React from "react";
import "./Checkout.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import {Footer} from "../../Components/Footer/Footer"

const NewBtn = styled(Button)({
  width: "20%",
  padding: "10px",
  fontWeight: "600px",
  cursor: "pointer",
  color: "black",
  margin: "0 7%",
  border:"none"
});
export const Checkout = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [address,setAddress] = useState({
    name:"",
   mobile:"",
   pin:"",
   address:"",
   town:"",
   city:""
})
const userId = sessionStorage.getItem("id");

  useEffect(() => {
    axios
      .get("https://limitless-shore-76001.herokuapp.com/cart")
      .then((res) =>{ 
        res.data = res.data.filter((e) => e.userId == userId)
      setData([...res.data])})
      .catch((error) => console.log(error.message));
  }, []);
  console.log("dat",Data)
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < Data.length; i++) {
      sum += Data[i].quantity * Number(Data[i].discountedPrice);
    }
    setSum(sum);
  }, [Data]);

  const handleToken = (token, addresses) => {
    navigate("/thankyou");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({
      ...address,
     [name]:value
    })
  };
 

 
  return (
    <div>
      <h1 style={{"text-align":"center"}}>Checkout</h1>
      <div className="checkoutContainer">
        <div className="payment">
          <form className="form">
            <h5>Contact Details</h5>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
            <input type="number" placeholder="Mobile No." name="mobile" onChange={handleChange}></input>
            <h5>Address</h5>
            <input type="number" placeholder="Pin Code" name="pin" onChange={handleChange}></input>
            <input type="text" placeholder="Address" name="address" onChange={handleChange}></input>
            <input type="text" placeholder="Town" name="town" onChange={handleChange}></input>
            <input type="text" placeholder="City" name="city" onChange={handleChange}></input>
           
          </form>
        </div>
        <div className="cart">
          <h2 className="summary">Cart Summary</h2>
          <div className="cartProducts">
            {Data.map((e) => {
              return (
                <div className="productCheck">
                  <img src={`${e.image}`} alt=""></img>
                  <p className="checkoutName">{e.name}</p>
                  <p>{`Quantity:${e.quantity}`}</p>
                </div>
              );
            })}
            
          </div>
          <h5 className="total">{`Total : Rs.${sum}`}</h5>
        </div>
      </div>

      <div className="payBtn">
            
              <StripeCheckout className="stripe"
                stripeKey="pk_test_51KyudJSHhNNVrw8uK9p2vdN33CVg69y3bdz0GtyGRDMRwP57fi9aw4rRUJvZCWbxlCJLMlO6iXmkRu6iZ7Jb7IoT00cGBZ84iY"
                token={handleToken}
                billingAddress
                shippingAddress
                disabled={!address.name || !address.mobile || !address.city || !address.pin || !address.address || !address.town}
              >
            
           
              </StripeCheckout>
             

            </div>
            <Footer></Footer>
    </div>
  );
};
