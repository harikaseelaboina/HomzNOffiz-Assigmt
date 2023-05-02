import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div className='container'>
      <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
       alt="page not found"
       style={{height:"100%",width:"65%"}}/>
       <Link to="/">

        <button className='btn btn-primary'>Back to home</button>
       </Link>
    </div>
  )
}

export default Pagenotfound
