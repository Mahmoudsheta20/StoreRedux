import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
const Navbar = () => {
  return (
<div className='nav_bar'>
  <Link to={'/'}><h2>sheta</h2></Link>

<div className='nav_bg'>
  <Link to={'/cart'}><BsFillBagFill/></Link>

<span>0</span>

</div>


</div>
  )
}

export default Navbar