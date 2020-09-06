import React from 'react'
import './Projects.css'

import Project from './Project'
import facebookImg from '../../images/facebook.PNG'
import netflixImg from '../../images/Netflix.PNG'
import zoomImg from '../../images/zoom.PNG'
import covidImg from '../../images/covid.PNG'

const Porjects = () => {
    return (
        <div className='projects'>
            <Project title="Netflix UI Clone" githubUrl="" img={netflixImg} />
            <Project title="Facebook UI Clone" githubUrl="" img={facebookImg} />
            <Project title="Zoom  Clone" githubUrl="" img={zoomImg} />
            <Project title="CO-VID Tracker" githubUrl="" img={covidImg} />
        </div>
    )
}

export default Porjects