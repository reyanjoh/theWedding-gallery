import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className="site-map-and-socials">
            <div className="site-map">
                
            </div>
            <div className="socials">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterestP}/>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
        </div>
        
        <div className="copy-right font-tiny">
            <center><span>© 2022 The Wedding Gallery, all rights reserved.</span></center>
        </div>
    </footer>
  )
}

export default Footer