import { Home } from "../Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import { Product } from "../Pages/Product/Products";
import { Login } from "../Pages/Login/Login";
// import { Address } from "../Pages/Address/Address";
import {Checkout} from "../Pages/Checkout/Checkout"
// import { Login } from "../Components/Login";
import { SingleProduct } from "../Pages/Product/SingleProduct";
import { Cart } from "../Pages/Cart/Cart";
import { Register } from "../Pages/Register/Register";
import { Thankyou } from "../Pages/Thankyou/Thankyou";
export const AllRoutes = () => {
return ( <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products/:category" element={<Product></Product>}></Route>
      <Route path="/products/:category/:id" element={<SingleProduct></SingleProduct>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      
      <Route path="/register" element={<Register></Register>}></Route>
    
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/thankyou" element={<Thankyou></Thankyou>}></Route>
    <Route path="/checkout" element ={<Checkout></Checkout>}></Route>
   
  </Routes>
 )
}