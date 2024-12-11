import { useState } from 'react'
import Menu from './Menu'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AHlogo from '../assets/images/logo.png'
import './Nav.css'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <img src={AHlogo} alt="logo of a shield with the caduceus on it" />
            <div className="search-box">
                <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch}/>
                </label>
                <input type="text" id="search" placeholder="Search" />
            </div>
            <button className="menu-toggler" onClick={toggleMenu}><FontAwesomeIcon icon={faBarsStaggered} /></button>
            {isOpen && <Menu />}
        </nav>
    )
}

export default Nav;