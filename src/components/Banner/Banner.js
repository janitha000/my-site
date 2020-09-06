import React from 'react'
import './Banner.css'

import banner_1 from '../../images/banner_1.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner_1} alt='banner__log' />
        </div>
    )
}

export default Banner