import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='header flex flex-row-on-desktop-column-on-mobile space-between padding-2-6'>
        <div>The<br/> Wedding<br/> Gallery</div>
        <Nav />
    </div>
  )
}

export default Header