import React from 'react'

import Banner from '../Banner/Banner'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Skills from '../Skills/Skills'

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <About />
            <Skills />
            <Projects />
        </div >
    )
}

export default Home;