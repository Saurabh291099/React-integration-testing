import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div>
            <h1>hello Blogs</h1>
            <div style={{marginTop:"10%"}}><Link to='/about-page'>About page</Link></div>
            <div><Link to='/blogs'>Blogs page</Link></div>
            <div><Link to='/cancellation'>Cance page</Link></div>
        </div>
    )
}

export default Blogs
