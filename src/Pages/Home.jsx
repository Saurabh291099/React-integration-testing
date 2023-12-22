import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div style={{marginTop:"10%"}}>
      <h1>Hello home page</h1>
      <div style={{marginTop:"10%"}}><Link to='/about-page'>About page</Link></div>
      <div><Link to='/blogs'>Blogs page</Link></div>
      <div><Link to='/cancellation'>Cance page</Link></div>
    </div>
  )
}

export default Home
