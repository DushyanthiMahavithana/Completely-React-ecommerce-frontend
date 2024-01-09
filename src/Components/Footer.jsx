import React from 'react'
import InstaIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LogoFooter from '../Images/logo.jpg'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footerLogo'> 
          <img src={LogoFooter} style={{ width: '200px', height: '200px' }}></img>
        </div>
      <div className='socialMedia'>
        <FacebookIcon/> 
        <InstaIcon/>
        
      </div>
      <p>&copy; 2023 smileshop.com</p>
      
    </div>
  )
}

export default Footer
