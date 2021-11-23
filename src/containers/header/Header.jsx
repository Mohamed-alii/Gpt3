import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
    return (
        <header className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                
                <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>

                <form className='gpt3__header-content__from'>
                    <input type='text' placeholder='Your Email Addresss' />
                    <button>Get started</button>
                </form>

                <figure className='gpt3__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </figure>
            </div>

            <figure className='gpt3__header-image'>
                    <img src={ai} alt='artificial intellegnce' />
                </figure>
        </header>
    )
}

export default Header
