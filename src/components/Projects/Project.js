import React from 'react'
import './Project.css'
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Porject = ({ img, title, projectUrl, githubUrl }) => {
    return (
        <div className='project'>
            <h3>{title}</h3>
            <img className="project__img" src={img} alt="facebook-ui-img" />
            <div className='project__url'>
                <div className="project__button">
                    <LanguageIcon /><p>Url</p>
                </div>

                <div className="project__button">
                    <CodeIcon /><p>Code</p>
                </div>
                <div className="project__button">
                    <MoreHorizIcon /><p>More</p>
                </div>
            </div>
        </div>
    )
}

export default Porject