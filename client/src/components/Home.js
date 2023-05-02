import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


import "./index.css"

const Home = () => {
    const [proInitial,setProInitial]=useState([])
    const [ctgry,setCtgry]=useState("")
    const [pric,setPric]=useState("")
     const[newdata,setNewData]=useState([])
  useEffect( ()=>{
    axios.get("http://localhost:5000/data")
   .then(res=>setProInitial(res.data)).catch(error=>console.log(error))
            
    },[])
    
    const changeHandler=(e)=>{
        setCtgry(e.target.value)
    }
    const pricechangeHandler=(e)=>{
      setPric(e.target.value)
    }

    useEffect(() => {
      let filteredData=proInitial;

      if (ctgry) {
      filteredData = filteredData.filter((product) => product.category === ctgry);
    }
       if (pric) {
      const [minPrice, maxPrice] = pric.split('-');
      filteredData = filteredData.filter(
        (product) => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
      );
    }
      setNewData(filteredData);
     
  }, [ctgry,pric, proInitial]);

  return (
    <div >
      <center>
      
        <navbar className="navbar navbar-light bg-light ">
        <a href="####" className='navbar-brand' style={{color:'black',fontWeight:"bold",}}>Online Store</a>
        <button className='btn btn-secondary' >
         <Link to="/manageproducts" style={{color:'white',fontWeight:"bold",textDecoration:"none"}}>Manage Products</Link> 
          </button>

      </navbar>
        
      <center className='p-3 bg1' >
      <span style={{fontWeight:"bold"}}     className="m-2"    >Filter by category</span>
      <select onChange={changeHandler} value={ctgry}>
              <option value=""></option>
              <option value="smartphones">smartphones</option>
              <option value="tv">tv</option>
              <option value="laptop">laptop</option>
              <option value="watches">watches</option>
              <option value="earphones">earphones</option>
          
      </select>

      <span style={{fontWeight:"bold"}}     className="m-2"    >Filter by Price Range</span>
      <select onChange={pricechangeHandler} value={pric}>
               <option value=""></option>
            <option value="0-5000">0-5000</option>
            <option value="5000-20000">5000-20000</option>
            <option value="20000-50000">20000-50000</option>
            <option value="50000-100000">50000-100000</option>
      </select>
         </center>

       <div className='container-fluid' style={{backgroundColor:"#d7dade"}}>
      <div className='row'>
      {newdata.map((item)=>
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

export default Home
