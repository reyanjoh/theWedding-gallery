import React from 'react'
import BlogSectionHero from './BlogSectionHero'
import BlogSectionOtherTopic from './BlogSectionOtherTopic'
import BlogSectionTopFive from './BlogSectionTopFive'

const BlogSection = () => {
  return (
    <div className='BlogSection'>
      <BlogSectionHero />
      <BlogSectionTopFive />
      <BlogSectionOtherTopic />

    </div>
  )
}

export default BlogSection