import React from 'react'
import { Link } from 'react-router-dom'
import ShopBanner from '../Images/shopbanner.jpg'
import '../Styles/Shop.css'


function Shop() {
  return (
    <div className='shopBanner'>
        <div className='header' style={{backgroundImage: `url(${ShopBanner})`}}>
            <h1>Best Designer Handbags to <br></br>Invest Now</h1>
            <p>Find the latest styles of Women's Handbags and more <br></br> from top fashion designers today!</p>
            <Link to="/recipes" >
                <button>LATEST DESIGNS</button>
            </Link>
        </div>
    </div>
  )
}

export default Shop
