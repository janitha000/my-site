import React from 'react'
import './About.css'

import Technology from './Technology'

const About = () => {
    return (
        <div className="about">
            <div className='about__title'>
                <h2>SOME WORD'S ABOUT ME</h2>
            </div>
            <div className='about__content'>
                <div className="about__left">
                    <p>
                        An energetic and passionate Senior Software Engineer with 5+ years of
                        enterprise software development experience and first-class honors
                        bachelor’s degree in computer science. Has thorough knowledge on
                        designing, developing, testing and deploying of web-based applications
                        in cloud-based platforms. Good team player and a team leader willing to
                        work in an organization while ensuring engineering excellence.
                    </p>
                </div>
                <div className="about__right">
                    <Technology img='https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png' />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/a/a3/.NET_Logo.svg' />




                </div>
            </div>
        </div>
    )
}

export default About;