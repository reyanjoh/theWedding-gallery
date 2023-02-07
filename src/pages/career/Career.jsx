import React from 'react'
import './Career.css'

const Career = () => {
  return (
    <div className='Career'>
        <section className='career-hiring-section flex'>
            <div className="career-img-div">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Career" srcset="" />
            </div>
            <div className="career-hiring">
                <h1 className='career-heading'>JOIN OUR TEAM</h1>
                <p className='career-p'>
                    The Wedding Gallery consists of various of creatives from different fields that are passionate on influencing the future of our local photographers in Bukidnon.
                </p>

                <h2 className='career-heading'>WHO ARE WE LOOKING FOR?</h2>
                <p className='career-p'>
                    We are not actively hiring right now, but if you'd like to be considered for a future role on our Support team, content writing, design, etc. please <a className='apply-here' href='/'>Apply Here</a>
                </p>
            </div>
        </section>
    </div>
  )
}

export default Career