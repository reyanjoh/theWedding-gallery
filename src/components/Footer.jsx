import React from 'react'
import SocialMedias from './SocialMedias'



const Footer = () => {
  return (
    <footer className='padding-2-6'>
        <div className="site-map-and-socials">
            <div className="site-map">
                
            </div>
            <SocialMedias />
        </div>
        
        <div className="copy-right font-tiny">
            <center><span>© 2022 The Wedding Gallery, all rights reserved.</span></center>
        </div>
    </footer>
  )
}

export default Footer