import React from 'react'
import { Helmet } from 'react-helmet'


const About = () => {

     

  return (
    <div className='About'>
      <Helmet>
        


          {/* <!-- Primary Meta Tags --> */}
        <title>About | The Wedding Gallery</title>
        <meta name="title" content="About | The Wedding Gallery" />
        <link rel="canonical" href="https://theweddinggallery.pages.dev/about" />
        <meta name="description" content="Join The Wedding Gallery, we are wedding resource dedicated to style, taste, and beauty" />
        <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
        <meta name="author" content="Reyan John Narvaja" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewedding-gallery.pages.dev/about/" />
        <meta property="og:title" content="About | The Wedding Gallery" />
        <meta property="og:description" content="Join The Wedding Gallery, we are wedding resource dedicated to style, taste, and beauty" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewedding-gallery.pages.dev/about/" />
        <meta property="twitter:title" content="About | The Wedding Gallery" />
        <meta property="twitter:description" content="Join The Wedding Gallery, we are wedding resource dedicated to style, taste, and beauty" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

      </Helmet>
      <section className='career-hiring-section flex'>
            <div className="career-img-div">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Career" />
            </div>
            <div className="career-hiring">
                <h1 className='career-heading'>The Wedding Gallery</h1>
                <p className='career-p'>
                  The Wedding Gallery is made up of a variety of creatives from many professions that are passionate about impacting the future of our local photography in Bukidnon. As a wedding resource dedicated to style, taste, and beauty, We exclusively highlight the chicest, prettiest, and most glossy magazine-worthy weddings.
                </p>

                {/* <h2 className='career-heading'>WHO ARE WE LOOKING FOR?</h2>
                <p className='career-p'>
                    We are not actively hiring right now, but if you'd like to be considered for a future role on our Support team, content writing, design, etc. please <a className='apply-here not-available' href='/career/application-form'>Apply Here</a>
                </p> */}
            </div>
        </section>
    </div>
  )
}

export default About