import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='header flex flex-column padding-2-6'>
        <div className='logo header flex flex-column flex-align-center'><a href="/">The wedding<br/> gallery</a></div>
        <Nav />
    </div>
  )
}

export default Header