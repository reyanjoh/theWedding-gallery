import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='header flex flex-column padding-2-6'>
        <div className='logo header flex flex-column flex-align-center'><a href="/">The wedding<br/> gallery</a></div>

        <NavLink className={'submit padding-0-1 font-small'} to={'/submit'}>Submit</NavLink>
        {/* <NavLink className={'nav padding-0-1 font-small'} to={'/'}>Home</NavLink> */}
        <Nav />
    </div>
  )
}

export default Header