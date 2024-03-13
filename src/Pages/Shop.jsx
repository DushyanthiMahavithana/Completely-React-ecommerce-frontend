import React from 'react'
import { Link } from 'react-router-dom'
import ShopBanner from '../Images/shopbanner.jpg'
import WomenImage1 from '../Images/women1.jpg'
import WomenImage2 from '../Images/women2.jpg'
import WomenImage3 from '../Images/women3.jpg'
import WomenImage4 from '../Images/women4.jpg'
import WomenImage5 from '../Images/women5.jpg'
import MenImage1 from '../Images/men1.jpg'
import MenImage2 from '../Images/men2.jpg'
import MenImage3 from '../Images/men3.jpg'
import MenImage4 from '../Images/men4.jpg'
import MenImage5 from '../Images/men5.jpg'
import '../Styles/Shop.css'
import PopularHandbags from '../Components/PopularHandbags'
import { popularhandbagsdata } from '../Helpers/popularhandbagsdata'
import { popularbackpacksdata } from '../Helpers/popularbackpacksdata'



function Shop() {
  return (
    <div>
        <div className='shopBanner'>
            <div className='header' style={{backgroundImage: `url(${ShopBanner})`}}>
                <h1>Best Designer Handbags to <br></br>Invest Now</h1>
                <p>Find the latest styles of Women's Handbags and more <br></br> from top fashion designers today!</p>
                <Link to="/#">
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
            <div className='latestCollection'>
                <h2>Latest Design Ladies Handbags</h2>
                <div className='allbagCards'>
                {popularhandbagsdata.map((handbagP, index) => {
                    return (
                    <PopularHandbags
                    key={index} 
                    image={handbagP.image}
                    name={handbagP.name}
                    price={handbagP.price}
                    />
                    );
                })}
                </div>
            </div>

        
        </div>
        <div className='backpacks'>
            <h1 className='second_header'><i>"Extremely comfortable to carry all day long,<br></br> Making your days easier and extra productive</i></h1>
            <div className='secondImagesSection'>
                <div className='backpacksImages'><img src={MenImage4}></img></div>
                <div className='backpacksImages'><img src={MenImage1}></img></div>
                <div className='backpacksImages'><img src={MenImage2}></img></div>
                <div className='backpacksImages'><img src={MenImage3}></img></div>
                <div className='backpacksImages'><img src={MenImage5}></img></div>
            </div>
            <div className='latestCollection'>
                <h2>Latest Design Backpacks</h2>
                <div className='allbagCards'>
                {popularbackpacksdata.map((handbagP, index) => {
                    return (
                    <PopularHandbags
                    key={index} 
                    image={handbagP.image}
                    name={handbagP.name}
                    price={handbagP.price}
                    />
                    );
                })}
                </div>
                
            </div>

        </div>
    </div>
    
  )
}

export default Shop
