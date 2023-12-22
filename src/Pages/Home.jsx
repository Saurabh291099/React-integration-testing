import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      Hello home page
    <Link to='/about-page'>about us page</Link>
    </div>
  )
}

export default Home
