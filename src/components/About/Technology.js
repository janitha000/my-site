import React from 'react'
import './Technology.css'

const Technology = ({ name, url, img }) => {
    return (
        <div className="tech">
            <img className="tech__img" src={img} alt="logo" />
        </div>
    )
}

export default Technology;