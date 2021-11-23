import React from 'react'
import './article.css'

const Article = ({ img }) => {
    return (
        <div className='gpt3__article'>
            <div className='gpt3__article-img-container'>
                <img src={img} alt='blog image' />
            </div>
            <div className='gpt3__article-content'>
                <p>Sep 26, 2021</p>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;
