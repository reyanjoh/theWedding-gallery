import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div className='height100dvh flex flex-center'>
        <Helmet>
            <title>Contact | The Wedding Gallery</title>
            <link rel="canonical" href="https://theweddinggallery.pages.dev/contact" />
            <meta name="description" content="Partnership with The Wedding Gallery. printing, content writing, design service in Bukidnon" />
            <meta name="keywords" content="The Wedding Gallery, printing, content writing, design service partnership " />
            <meta name="author" content="Reyan John Narvaja"/>
        </Helmet>


        <section className='career-hiring-section flex'>
            <div className="career-img-div">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Career" />
            </div>
            <div className="career-hiring">
                <h1 className='career-heading'>MARKETING</h1>
                <p className='career-p'>
                    For Community and Collaborations, email <a href="mailto:theweddinggallery.business.marketing@gmail.com">theweddinggallery.business.marketing@gmail.com</a>
                </p>

                <h2 className='career-heading'>SUPPORT</h2>
                <p className='career-p'>
                    For Questions, message us via the facebook messenger or email <a href="mailto:theweddinggallery.business.support@gmail.com">theweddinggallery.business.support@gmail.com</a>
                </p>

                {/* <h2 className='career-heading'>WORKSHOPS & SPONSORSHIP</h2>
                <p className='career-p'>
                    We love supporting education and events from communities around the world.To apply for a sponsorship, click here
                </p> */}
                <h2 className='career-heading'>PARTNERSHIPS</h2>
                <p className='career-p'>
                    To offer your print services and apply to be a lab partner with The Wedding Gallery, message or call <a href="tel:+(65)976 173 1273">+(65)976 173 1273</a>
                </p>
                <h2 className='career-heading'>GENERAL INQUIRIES</h2>
                <p className='career-p'>
                    For all other inquiries email <a href="mailto:theweddinggallery.business.general@gmail.com">theweddinggallery.business.general@gmail.com</a>
                </p>
            </div>
        </section>
    </div>
  )
}

export default Contact