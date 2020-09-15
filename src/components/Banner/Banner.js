import React from 'react'
import './Banner.css'

import banner_1 from '../../images/banner_1.jpg'
import portrat2 from '../../images/portrait-2.jpg'

const Banner = () => {
    return (
        <header className="banner"
            style={{
                objectFit: "contain",
                backgroundSize: "cover",
                backgroundImage: `url(${portrat2})`,
                height: '600px'
            }}>

            {/* <img src= alt='banner__log' /> */}

            <div className="banner__content">
                <h3 className="banner__hello">HELLO THERE</h3>
                <h1 className="banner__name">I AM JANITHA</h1>
                <h3 className="banner__developer">A PROFESSIONAL FULLSTACK DEVELOPER</h3>
                <p className="banner__description">Javascript(Node.js, React, Angular) and .NET/.NET core full stack developer with more than 5 years of enterprise experience.</p>
            </div>
        </header>
    )
}


export default Banner