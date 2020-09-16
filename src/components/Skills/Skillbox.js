import React from 'react'
import './Skillbox.css'

import Skill from './Skill'

const Skillbox = ({ title, skills }) => {
    return (
        <div className="skillbox">
            <div className="skillbox__left">
                <h4>{title}</h4>
            </div>
            <div className="skillbox__right">
                {skills && skills.map(skill => (
                    <Skill name={skill} />
                ))}
            </div>
        </div>
    )
}

export default Skillbox;