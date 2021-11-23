import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <section className='gpt3__blog section__padding' id='blog'>
            <header className='gpt3__blog-header'>
                <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
            </header>
            <div className='gpt3__blog-content'>
                <div className='gpt3__blog-content_groupA'>
                    <Article img={blog01}/>
                </div>
                <div className='gpt3__blog-content_groupB'>
                    <Article img={blog02}/>
                    <Article img={blog03}/>
                    <Article img={blog04}/>
                    <Article img={blog05}/>
                </div>
            </div>
        </section>
    )
}

export default Blog
