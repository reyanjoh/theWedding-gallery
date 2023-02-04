import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex flex-align-center flex-row-on-desktop-column-on-mobile'>
        <NavLink className={'padding-0-1 font-small'} to={'/'}>Home</NavLink>
        <NavLink className={'padding-0-1 font-small'} to={'/gallery'}>Gallery</NavLink>
        <NavLink className={'padding-0-1 font-small'} to={'/contact'}>Contact</NavLink>
        <NavLink className={'padding-0-1 font-small'} to={'/career'}>Career</NavLink>
        <NavLink className={'padding-0-1 font-small'} to={'/blogs'}>Blogs</NavLink>   
    </nav>
  )
}

export default Nav