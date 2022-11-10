import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedIcon />
        </div>
        <p> &copy; 2022 pedrotech.com </p>
    </div>
  );
}

export default Footer