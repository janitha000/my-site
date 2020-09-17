import React from 'react'

import Banner from '../Banner/Banner'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Skills from '../Skills/Skills'
import BlogContent from '../Blog/BlogContent'
const Home = () => {
    return (
        <div className="home">
            <Banner />
            <About />
            <Skills />
            <Projects />
            <BlogContent />
        </div >
    )
}

export default Home;