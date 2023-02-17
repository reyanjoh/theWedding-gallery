import React from 'react'
// import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import SideNav from './SideNav'
// import SocialMedias from './SocialMedias'

const Header = () => {
  return (
    <div className='header flex flex-center scroll-area'>

        <SideNav  />


        {/* <NavLink className={'nav padding-0-1 font-small'} to={'/'}>Home</NavLink> */}
        <Nav />
        

        
        

        <span className='scroll'>-scroll-</span>
    </div>
  )
}

export default Header