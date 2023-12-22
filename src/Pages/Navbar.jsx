import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = (props) => {
    return (
        <div>
            <div style={{marginTop:"10%"}}><Link to={props.slug[0]}>About page</Link></div>
            <div><Link to={props.slug[1]}>Blogs page</Link></div>
            <div><Link to={props.slug[2]}>Cancellation</Link></div>
        </div>
    )
}

export default Blogs