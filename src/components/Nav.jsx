import React from 'react'
import { NavLink } from 'react-router-dom'



export const Nav = () => {
  return (
    <nav className='flex space-between flex-row-on-desktop-column-on-mobile'>
        <div className="menu">
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/'}>Home</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/gallery'}>Gallery</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small not-available'} to={'/studio-listing'}>Directory</NavLink>
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/blogs'}>Blogs</NavLink>   
          <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/about'}>About</NavLink>
        </div>
    </nav>
  )
}


export const SideNav = () => {
  return (
    <nav className='SideNav'>
        <NavLink className={'uppercase nav submit padding-0-1 font-small not-available'} to={'/submit'}>Submit</NavLink>
        <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/career'}>Career</NavLink>
        <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/contact'}>Contact</NavLink>          

    </nav>
  )
}

