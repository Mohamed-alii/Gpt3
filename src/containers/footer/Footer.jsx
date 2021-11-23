import React from 'react'
import './footer.css'
import logoImg from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='gpt3__footer '>
            <header className='gpt3__footer-header'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
                <button>Request Early Access</button>
            </header>
            <div className='gpt3__footer-content'>
                <div className='gpt3__footer-content_logo'>
                    <img src={logoImg} alt='logo'/>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-content_links'>
                    <h3>Links</h3>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-content_links'>
                    <h3>Company</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-content_links'>
                    <h3>Get in touch</h3>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className='gpt3__footer-content_copyright'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
