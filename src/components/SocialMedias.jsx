
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedias = () => {
  return (
    <div className="socials-header flex flex-column">
    
        <a className='social-icons' href="https://www.facebook.com/people/The-Wedding-Gallery/100089969114185/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a className='social-icons' href="https://pin.it/2kNidgX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterestP}/>
        </a>
        <a className='social-icons' href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>

    </div>
  )
}

export default SocialMedias