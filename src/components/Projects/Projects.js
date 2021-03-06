import React from 'react'
import './Projects.css'

import Project from './Project'
import facebookImg from '../../images/facebook.PNG'
import netflixImg from '../../images/Netflix.PNG'
import zoomImg from '../../images/zoom.PNG'
import covidImg from '../../images/covid.PNG'
import portifolioImg from '../../images/portifolio.PNG'
import marsWeather from '../../images/mars-weather.PNG'

const Porjects = () => {
    return (
        <div className='projects'>
            <div className="projects__title">
                <h2>DEMO PROJECTS</h2>
            </div>
            <div className="project__items">
                <Project title="CO-VID Tracker"
                    projectUrl="https://covid-tracker-react-62bbd.web.app/"
                    githubUrl="https://github.com/janitha000/react-covid/tree/master/covid-tracker"
                    img={covidImg} />
                <Project title="Netflix UI Clone"
                    projectUrl="https://netflix-ui-clone-3b813.web.app/"
                    githubUrl="https://github.com/janitha000/react-netflix-ui"
                    img={netflixImg} />
                <Project title="Zoom  Clone"
                    projectUrl="https://warm-thicket-07367.herokuapp.com/0b9ec5f7-6889-453e-ad67-d08a0555b563"
                    githubUrl="https://github.com/janitha000/zoom-clone"
                    img={zoomImg} />
                <Project title="Facebook UI Clone"
                    projectUrl="https://facebook-react-clone.web.app/"
                    githubUrl="https://github.com/janitha000/react-facebook-clone"
                    img={facebookImg} />
                <Project title="Developer Portifolio"
                    projectUrl="https://master.d1xw2phoatpgus.amplifyapp.com/"
                    githubUrl="https://github.com/janitha000/my-site"
                    img={portifolioImg} />
                <Project title="Mars Weather App"
                    projectUrl="https://master.d1bza1kg93r9fm.amplifyapp.com/"
                    githubUrl="https://github.com/janitha000/mars-weather-app"
                    img={marsWeather} />
            </div>


        </div>
    )
}

export default Porjects