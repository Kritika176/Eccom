import axios from 'axios';
import React, { useEffect, useState } from 'react'

import "./Register.css";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

import { useNavigate } from 'react-router-dom';
export const Register = () => {
  const id = sessionStorage.getItem("id");
  useEffect(() => {
    if (id) {
      navigate("/")
    }
  },[])
  const navigate = useNavigate();
    const [user,setUser] = useState({
        "username":"",
        "email":"",
        "password":""
    })
    const createUser = (e) => {
     const name = e.target.name;
     const value = e.target.value
        setUser({...user,[name]:value})
    }
    const [err,setErr] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios.post("https://shrouded-reaches-37639.herokuapp.com/register",user)
      .then((res) => 
        {
          console.log("data",res.data)
          if(res.data.errors)
          {
            setErr(res.data.errors[0].msg)
          }
          else if(res.data.email){
             navigate("/login")
          }
        }
      )
      .catch((err)=> console.log(err))
    }
  return (
    <div id="registerContainer">
    <div id="main">
      <div id="signup">
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="Username" onChange={createUser}  />
					<input type="email" name="email" placeholder="Email" onChange={createUser} />
					<input type="password" name="password" placeholder="Password" onChange={createUser} />
					<button type="submit">Sign up</button>
          {err!==""? <div className='registerErr'><ErrorOutlineRoundedIcon></ErrorOutlineRoundedIcon>{err}</div>:""}
          
				</form>
			</div>
    </div>
    </div>
  )
}


