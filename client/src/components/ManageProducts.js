import React,{useState,useEffect} from 'react'
import "./index.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
     const [prodata,setproData]=useState({name:"",description:"",image:"",price:"",category:""})

     const changeHandler=(e)=>{
    setproData({...prodata,[e.target.name]:e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/inputdata",prodata)
    .then(res=>{
      alert(res.data);
      console.log(prodata);
       setproData({name:"",description:"",image:"",price:"",category:""})    
  
    })
     .catch(err => {
                  if (err.response && err.response.status === 400) {
                     alert("Product already Registered.")}
                  
                  else{
                    return alert(err);
                  }
      })
      
     
    }
     

  return (
    <div className='container-fluid p-5 bg'>
      <center>
        <h1>Add the new Product</h1>
      <form onSubmit={submitHandler} >
        <input type="text" placeholder='Name of the Product' required  name="name" onChange={changeHandler} value={prodata.name}></input> <br></br>
        <input type="text" placeholder='Description' required  name="description" onChange={changeHandler}  value={prodata.description}></input><br></br>
        <input type="text" placeholder='ImageLink' required name="image" onChange={changeHandler}  value={prodata.image}></input><br></br>
        <input type="text" placeholder='Price' required  name="price" onChange={changeHandler}  value={prodata.price}></input><br></br>
        <input type="text" placeholder='Category' required name="category" onChange={changeHandler}  value={prodata.category}></input><br></br>
        
        <input type="submit" value="Add Product" style={{"backgroundColor":"#0d3873",color:"white"}}></input> 
      </form>
      <Link to="/">
         <button className='btn btn-secondary'>
        Back to home
      </button>
      </Link>
     
      
      </center>
    </div>
  )
}

export default ManageProducts
