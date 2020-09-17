import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './Blogs.css'
import BlogContent from './BlogContent'


const Blogs = () => {

    return (
        <div className="blogs">
            <header className="blogs__banner"
                style={{
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundImage: `url('https://res.cloudinary.com/practicaldev/image/fetch/s--qzgkHGNK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/utmultq439po374vr7a7.jpg')`,
                    height: '300px'
                }}>

                {/* <img src= alt='banner__log' /> */}

                <div className="blog__content">
                    {/* <h1 className="blog__name">ARTICLES</h1> */}


                </div>
            </header>
            <BlogContent />

        </div>
    )


}

export default Blogs;