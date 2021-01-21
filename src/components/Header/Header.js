import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../images/main__logo.jpg'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md'


const Header = () => {
    const [show, handleShow] = useState(false)
    const [click, setClick] = useState(false);

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
            <Link to='/' className="navbar-logo">
                <MdFingerprint className="navbar-icon" />

            </Link>
            <div className="home_icon" onClick={() => setClick(!click)}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

            <div className={click ? "header_right active" : "header_right"}>

                <h3 className="header__item" onClick={() => setClick(!click)}><Link to='/'>Home</Link></h3>
                <h3 className="header__item" onClick={() => setClick(!click)}><Link to='/articles'>Articles</Link></h3>
                <h3 className="header__item" onClick={() => setClick(!click)}><Link to='/contact'>Contact</Link></h3>


            </div>
        </div>

    )
}

export default Header;