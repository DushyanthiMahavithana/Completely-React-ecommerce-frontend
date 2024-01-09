import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/logo.jpg'
import ReorderIcon from '@material-ui/icons/Reorder';
import "../Styles/Navbar.css"



function Navbar() { 
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='logo' id={openLinks ? "open" : "close"}>
        <img src={Logo}></img>
        <div className='hidden-menu-icon'>
          <Link to='/'>Shop</Link>
          <Link to='/handbags'>Hand Bags</Link>
          <Link to='/backpacks'>Back Packs </Link>
        </div>
      </div>
      
      <div className='menu'>
        <Link to='/'>Shop</Link>
        <Link to='/handbags'>Hand Bags</Link>
        <Link to='/backpacks'>Back Packs </Link>
      </div>

      <div className='menu-icon'>
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
    </div>
  )
}

export default Navbar
