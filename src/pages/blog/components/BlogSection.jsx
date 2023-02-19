import React from 'react'
import BlogSectionHero from './BlogSectionHero'
import BlogSectionOtherTopic from './BlogSectionOtherTopic'
import BlogSectionSponsor from './BlogSectionSponsor'
import BlogSectionTopFive from './BlogSectionTopFive'

const BlogSection = () => {
  return (
    <div className='BlogSection scroll-container '>
      <BlogSectionHero />
      <BlogSectionTopFive />
      <BlogSectionSponsor />
      <BlogSectionOtherTopic />

    </div>
  )
}

export default BlogSection