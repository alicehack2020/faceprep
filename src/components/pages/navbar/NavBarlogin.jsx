import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
const NavBarLogin = () => {
  return (
    <div className='NavBarmain'>
        <Link className='link'to="/"><Button variant="outlined">Login</Button></Link>
     </div>
  )
}

export default NavBarLogin



