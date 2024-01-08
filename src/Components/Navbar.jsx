import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='menu'>
        <Link to='/'>Shop</Link>
        <Link to='/handbags'>Hand Bags</Link>
        <Link to='/backpacks'>Back Packs </Link>
    </div>
  )
}

export default Navbar
