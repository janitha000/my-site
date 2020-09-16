import React from 'react'
import './Project.css'
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Porject = ({ img, title, projectUrl, githubUrl }) => {

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className='project'>

            <img className="project__img" src={img} alt="facebook-ui-img" onClick={() => openInNewTab(projectUrl)} />
            <div className='project__url'>
                <p>{title}</p>
                <div className="project__buttons">
                    <div className="project__button">
                        <CodeIcon onClick={() => openInNewTab(githubUrl)} />
                        {/* <span class="tooltiptext">Code</span> */}
                    </div>
                    <div className="project__button">
                        <MoreHorizIcon />
                        {/* <span class="tooltiptext">More</span> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Porject