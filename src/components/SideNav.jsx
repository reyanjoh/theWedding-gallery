import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='SideNav'>
        <NavLink className={'uppercase submit padding-0-1 font-small not-available'} to={'/submit'}>Submit</NavLink>
        <NavLink className={'uppercase nav padding-0-1 font-small not-available'} to={'/blogs'}>Blogs</NavLink>  
        <NavLink className={'uppercase nav padding-0-1 font-small'} to={'/career'}>Career</NavLink>
    </div>
  )
}

export default SideNav