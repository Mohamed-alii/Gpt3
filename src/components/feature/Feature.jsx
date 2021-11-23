import React from 'react'
import './feature.css'

const Feature = ({ header, text }) => {
    return (
        <div className='gpt3__feature'>
            <div className='gpt3__feature-title'>
                <div />
                <h1>{header}</h1>
            </div>
            <div className='gpt3__feature-container'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;