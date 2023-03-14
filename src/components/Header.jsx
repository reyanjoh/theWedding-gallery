import React from 'react'
// import { NavLink } from 'react-router-dom'
import {Nav, SideNav} from './Nav'
// import SocialMedias from './SocialMedias'

const Header = () => {
  return (
    <header className='header flex flex-center scroll-area'>
        <Nav />
        
        <SideNav  />
        {/* <NavLink className={'nav padding-0-1 font-small'} to={'/'}>Home</NavLink> */}
        

    </header>
  )
}

export default Header