import React from 'react'
import { Route } from 'react-router-dom'
import './Blog.css'

const Blog = ({ title, description, url, img }) => {
    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className="blog" onClick={() => openInNewTab(url)}>
            <div className="blog__left">
                <img src={img} alt="logo" />
            </div>
            <div className="blog__right">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default Blog;