import React from 'react'

const FeaturedStudio = () => {
  return (
    <section className='FeaturedStudio scroll-area flex flex-column padding-2-6'>
        <div className="featured-studio-info">
            <h3 className='studio-name'>Studio 1</h3>
            <span className='presents Garamond'>presents</span>
        </div>
        <section className="flex">

            <img className='featured-studio-img' src="./util/src/imgs/brideandgroom.jpg" alt="" />
            
            <div className='featured-studio-client-info-section'>
                <h3 className='Garamond'>Studio 1 Client</h3>
                <p className='featured-studio-client-info Garamond'>
                    The features you love, on every device. With quick loading even for the largest galleries, clients can efficiently share, shop, and download images on the go.
                </p>
                <a className='featured-studio-cta' href="/">Book Now</a>
            </div>
        </section>
    </section>
  )
}

export default FeaturedStudio