import React from 'react'
import { Link } from 'react-router-dom'
import ShopBanner from '../Images/shopbanner.jpg'
import '../Styles/Shop.css'


function Shop() {
  return (
    <div>
        <div className='shopBanner'>
            <div className='header' style={{backgroundImage: `url(${ShopBanner})`}}>
                <h1>Best Designer Handbags to <br></br>Invest Now</h1>
                <p>Find the latest styles of Women's Handbags and more <br></br> from top fashion designers today!</p>
                <Link to="/recipes">
                    <button>LATEST DESIGNS</button>
                </Link>
            </div>
        </div>
        <div className='womenBags'>
            <h1 className='second_header'><i>"Introducing our newest line of handbags,<br></br> now available at your favorite retailers</i></h1>
            
        
        </div>
    </div>
    
  )
}

export default Shop
