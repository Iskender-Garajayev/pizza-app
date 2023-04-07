import React from 'react'
import Icon from '../img/icons8-pizza-48.png'

const Home = () => {
  return (
    <div className='home-container'> 
      <div className="logo-navbar-container">
        <div className="logo">
          <img src={Icon} alt="icon" />
          <span>pizza mania</span>
        </div>
        <div className="navbar">
          <ul>
            <li>home</li>
            <li>menu</li>
            <li>spesials & coupos</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home