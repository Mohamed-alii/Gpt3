import React from 'react'
import './Possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <section className='gpt3__possibility' id='possibility'>
            <figure className='gpt3__possibility-img-container'>
                <img src={possibility} alt='artificial intellegence' />
            </figure>
            <div className='gpt3__possibility-container'>
                <p>Request Early Access to Get Started</p>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p>Request Early Access to Get Started</p>
            </div>
        </section>
    )
}

export default Possibility
