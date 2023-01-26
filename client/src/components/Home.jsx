import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={'/create-form'}><button> Create Form</button></Link>
        <Link to ='/fill-form'><button>Fill Form</button></Link>
    </div>
  )
}

export default Home