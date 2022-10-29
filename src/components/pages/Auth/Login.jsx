import React, { useEffect, useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Registration.css"
import { useNavigate } from 'react-router-dom'; 
const Login = () => {

   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const navigate=useNavigate()
  
   useEffect(()=>{
    localStorage.setItem("auth",false)
   })
   
  const saveData=()=>{
    localStorage.setItem("auth",true)
    navigate("/home")
   }
  return (
    <div>
      <NavBarLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter your email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter your password" variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:"30px",marginBottom:"30px"}}/>
            <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Login</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default Login