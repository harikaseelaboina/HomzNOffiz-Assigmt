import React,{useState} from 'react'
import axios from 'axios';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Container  from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const Register = () => {
  const [userdata,setUserData]=useState({name:"",email:"",password:"",confirmpassword:""})
  const [token,setToken]=useState("")
  

  const changeHandler=(e)=>{
    setUserData({...userdata,[e.target.name]:e.target.value})
  }
  

  const submitHandler= async (e)=>{
    e.preventDefault();
    if(userdata.email.includes("@homznoffiz.com")){
      setToken(userdata.email)
    }
    else{
      alert("You don't have access to this page")
    }
  }

  if(token){
    return <Navigate to="/manageproducts" />
  }

  return (
    <div className='bg2'  style={{paddingTop:"5rem"}}>
        <Container style={{backgroundColor:"#d3dbe0",padding:"10px"}}  >
          <center>
         
           <Box>
            <h1>Login Form</h1>
            <p>Only for admins</p>
         <form onSubmit={submitHandler} >     
         <TextField
         
          required
          onChange={changeHandler}
           name="name"
           value={userdata.name}
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          onChange={changeHandler}
           name="email"
           value={userdata.email}
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        <TextField
          required
          onChange={changeHandler}
           name="password"
           type="password"
           value={userdata.password}
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Password"
          defaultValue=""
        />
        <TextField
          required
           type="password"
          onChange={changeHandler}
           name="confirmpassword"
           value={userdata.confirmpassword}
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Confirm Password"
          defaultValue=""
        />
            {/* <input type="text" name="name" placeholder='full name' onChange={changeHandler}/> <br/>
            <input type="email" name="email" placeholder='email' onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password' onChange={changeHandler}/><br/>
            <input type="password" name="confirmpassword" placeholder='confirm your password' onChange={changeHandler}/>
            <br/> */}
            <Box>
        <Button className='btn' variant="contained" type="submit" style={{marginTop:"40px",marginBottom:"20px"}}  >Login</Button>
        
        </Box>
        </form>

        </Box>
        

        <Link to="/" style={{marginTop:"40px"}} className='btn'>  <Button className='btn' variant="contained" >Back to Home</Button></Link>
      
        </center>

       
          </Container>
          </div> 
  )
}

export default Register
