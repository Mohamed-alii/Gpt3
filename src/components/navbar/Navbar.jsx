import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'


const Menu = () => {
    return (
        <>
            <li><a href='#home'>Home</a></li>
            <li><a href='#wgpt3'>What is GPT?</a></li>
            <li><a href='#features'>Case Studies</a></li>
            <li><a href='#possibility'>Open Ai</a></li>
            <li><a href='#blog'>Library</a></li>
        </>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMenuHandler = () => {
        setToggleMenu(true);
    }

    const closeMenuHandler = () => {
        setToggleMenu(false);
    }

    return (
        <nav className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <ul className='gpt3__navbar-links_container' >
                    <Menu />
                </ul>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu 
                ? <RiCloseLine color='#fff' size={27} onClick={closeMenuHandler}/>
                : <RiMenu3Line color='#fff' size={27} onClick={openMenuHandler}/>
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <ul className='gpt3__navbar-menu_container-links-list'>
                                <Menu />
                            </ul>
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;