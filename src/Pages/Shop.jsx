import React from 'react'
import { Link } from 'react-router-dom'
import ShopBanner from '../Images/shopbanner.jpg'
import WomenImage1 from '../Images/women1.jpg'
import WomenImage2 from '../Images/women2.jpg'
import WomenImage3 from '../Images/women3.jpg'
import WomenImage4 from '../Images/women4.jpg'
import WomenImage5 from '../Images/women5.jpg'
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
            <div className='secondImagesSection'>
                <div className='womenBagsImages'><img src={WomenImage1}></img></div>
                <div className='womenBagsImages'><img src={WomenImage4}></img></div>
                <div className='womenBagsImages'><img src={WomenImage2}></img></div>
                <div className='womenBagsImages'><img src={WomenImage3}></img></div>
                <div className='womenBagsImages'><img src={WomenImage5}></img></div>
            </div>
        
        </div>
    </div>
    
  )
}

export default Shop
