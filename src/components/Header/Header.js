import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../images/main__logo.jpg'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`header ${show && 'header__black'}`}>
            <div className='header__left'>
                {/* <img classname='header__img' src={logo} alt='main__logo' /> */}
                {/* <h3>Janitha Tennakoon</h3> */}
                {/* <HomeIcon fontSize="large" /> */}
                <Link to='/'> <MenuIcon fontSize="large" /></Link>

            </div>
            <div className='header_right'>
                <h3 className="header__item"><Link to='/'>Home</Link></h3>
                <h3 className="header__item"><Link to='/articles'>Articles</Link></h3>
                <h3 className="header__item"><Link to='/contact'>Contact</Link></h3>


            </div>
        </div>
    )
}

export default Header;