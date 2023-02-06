
import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialMedias from './SocialMedias'

const Nav = () => {
  return (
    <nav className='flex space-between flex-row-on-desktop-column-on-mobile'>
        <SocialMedias />
        <div className="menu">
          <NavLink className={'nav padding-0-1 font-small'} to={'/'}>Home</NavLink>
          <NavLink className={'nav padding-0-1 font-small'} to={'/gallery'}>Gallery</NavLink>
          <NavLink className={'nav padding-0-1 font-small not-available'} to={'/about'}>About</NavLink>
          <NavLink className={'nav padding-0-1 font-small not-available'} to={'/studio-listing'}>Studio Listing</NavLink>
          <NavLink className={'nav padding-0-1 font-small not-available'} to={'/contact'}>Contact</NavLink>
          <NavLink className={'nav padding-0-1 font-small not-available'} to={'/blogs'}>Blogs</NavLink>   
          <NavLink className={'nav padding-0-1 font-small not-available'} to={'/career'}>Career</NavLink>
        </div>
    </nav>
  )
}

export default Nav


