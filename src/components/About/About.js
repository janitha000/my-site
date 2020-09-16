import React from 'react'
import './About.css'

import Technology from './Technology'

const About = () => {

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className="about">
            <div className='about__title'>
                <h2>SOME WORD'S ABOUT ME</h2>
            </div>
            <div className='about__content'>
                <div className="about__left">
                    <p>
                        A professional Fullstack developer with 5+ years of enterprise software development experience in Sri Lanka and Singapore with first-class honors bachelor's degree in computer science. Currently, an AWS certified solutions architect and a AWS Community Builder. Has thorough knowledge of designing, developing, testing, and deploying web-based applications in cloud-based platforms.
                    </p>
                    <div className="about__logos">

                        <img src="https://www.intellectualpoint.com/wp-content/uploads/2019/04/AWS_Associate.png" alt="AWS logo"
                            onClick={() => openInNewTab('https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-06-03&ci=AWS00752771')} />
                        <img src="https://pbs.twimg.com/media/Efyr3OdWkAESHvw.png" alt="AWS Logo"
                            onClick={() => openInNewTab('https://aws.amazon.com/developer/community/community-builders/')} />
                    </div>
                </div>
                <div className="about__right">
                    <Technology img='https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png'
                        url="https://nodejs.org/en/" />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' />
                    <Technology img='https://upload.wikimedia.org/wikipedia/commons/a/a3/.NET_Logo.svg' />




                </div>
            </div>
        </div>
    )
}

export default About;