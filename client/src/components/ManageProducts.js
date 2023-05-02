import React,{useState,useEffect} from 'react'
import "./index.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
     const [prodata,setproData]=useState({name:"",description:"",image:"",price:"",category:""})
     const [details,setDetails]=useState([])

     const changeHandler=(e)=>{
    setproData({...prodata,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    axios.get("http://localhost:5000/data")
    .then(res=>setDetails(res.data))
  },[])

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

      <div className='container-fluid mt-3' style={{backgroundColor:"#d7dade"}}>
        <h1>Listed Products</h1>
      <div className='row'>
      {details.map((item)=>
      <div className='col-md-4 '  style={{padding:"5px",}} key={item.id}>

      <div className='card' style={{width:"18rem",padding:"5px",backgroundColor:"#dbd7cc"}}>
          <img src={item.image} className="card-img-top" alt={item.name} style={{width:"200px",height:"200px",margin:"auto"}} />
          <div>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>Rs.{item.price}</p>
              <p className='card-text' style={{height:"80px",overflowX:"auto",overflowY:"auto"}}>Rs.{item.description}</p>
              
          </div>

      </div>
      
  </div>

      )}
    </div>
    </div>
      
      </center>
    </div>
  )
}

export default ManageProducts
