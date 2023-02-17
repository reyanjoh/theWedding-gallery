
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex space-between flex-row-on-desktop-column-on-mobile'>
        
        <div className="menu">
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/'}>Home</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/gallery'}>Gallery</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small not-available'} to={'/studio-listing'}>Studio Listing</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/about'}>About</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/contact'}>Contact</NavLink>          
        </div>
    </nav>
  )
}

export default Nav


