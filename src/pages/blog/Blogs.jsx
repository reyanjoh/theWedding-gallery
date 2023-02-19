import React from 'react'
import AdSpace from '../../components/AdSpace'
// import { BlogSectionLoading } from '../../components/LoadingScreens'
import BlogSection from './components/BlogSection'

const Blogs = () => {
  return (
    <div className='Blogs padding-0-6 '>
      <AdSpace />
      

      {/* <BlogSectionLoading /> */}

      <BlogSection />
    </div>
  )
}

export default Blogs 