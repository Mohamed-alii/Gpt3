import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <figure>
                <img src={google} alt={google}/>
            </figure>
            <figure>
                <img src={slack} alt={slack}/>
            </figure >
            <figure>
                <img src={atlassian} alt={atlassian}/>
            </figure >
            <figure>
                <img src={dropbox} alt={dropbox}/>
            </figure>
            <figure>
                <img src={shopify} alt={shopify}/>
            </figure>
        </div>
    )
}

export default Brand;
