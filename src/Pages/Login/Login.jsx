import "./Login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {loginFailure,loginLoading,loginSuccess } from "../../Redux/Login/action";
import { styled } from '@mui/material/styles';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RegisterButton = styled(Button)({
    width:"20%",
    padding:"10px",
    fontWeight:"600px",
     cursor: "pointer",
      color:"black",
     margin:"auto",
     
  
  }) 

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const createUser = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]:value
        })
    }
    const id = sessionStorage.getItem("id");
    console.log("iii",id)
    useEffect(() => {
      if(id)
      {
        navigate("/")
      }
     
    },[])
    // console.log(user)
    const handleSubmit = (e) =>{
        e.preventDefault();
     dispatch(loginLoading());
     
      axios.post((`https://shrouded-reaches-37639.herokuapp.com/login`),user)
      .then((res) =>{
        
        console.log("login",res.data)

         if(res.data.msg)
         {
          console.log(res.data.msg)
           setError(res.data.msg)
         }
         else if(res.data.messa)
         {
           setError(res.data.messa)
         }
         else if(res.data.token){
           console.log("iiiid",res.data.id)
           dispatch(loginSuccess({id:res.data.id}));
           sessionStorage.setItem("id",res.data.id);
           navigate("/");
         }
      }
     
      )
      .catch(() => dispatch(loginFailure()))
    }

    const User = useSelector(store => store);
    console.log("loginUser",User);
    // const handleNavigate = ()  =>{
    //     navigate("/register")
    // }
   
  return (
    <div id="loginContainer">
    <div id="main">
      <div id="login">
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
				
					<input type="str" name="email" placeholder="Email" onChange={createUser} onClick={()=>{setError("")}}/>
					<input type="password" name="password" placeholder="Password" onChange={createUser} onClick={()=>{setError("")}}/>
					<button classsName="loginbutton" type="submit" >Continue</button>
          {error!=="" ? <div className="login_error"><ErrorOutlineRoundedIcon></ErrorOutlineRoundedIcon> {`${error}`}</div>:""}
         
				</form>
                <div id="registerBtn">
                  
               <RegisterButton  onClick={() => navigate("/register")}>Register</RegisterButton>
              
               
               </div>
			</div>
    </div>
   
    </div>
  )
}