import React from 'react'
import Icon from '../img/icons8-pizza-48.png'
import Table from '../img/burger 1.png'

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
      <div className="home">
        <div className="title">
           <h2>Pizza family</h2>
           <h4>people disappoint, but pizza never does</h4>
           <div className="input-btn">
            <input type="text" />
            <button>search location</button>
           </div>
           <button>Try now</button>
        </div>
        <div className="img">
          <img src={Table} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home