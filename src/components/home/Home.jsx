import React from 'react'
import Header from '../Header/Header'

const Home = (props) => {
  return (
    <div>
      <Header xxx={props.checkLogout}></Header>
      <h1 className='a'>Welcome to admin pannel</h1>
    </div>
  )
}

export default Home
