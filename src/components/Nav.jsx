import React from 'react'
import "./Nav.scss"
import DateTime from './DateTime'

const Nav = () => {

  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/nav-icons/apple.svg" alt="" />
        </div>

        {/* Left Navbar */}

        <div className="nav-item">
          <p>Lalit Prajapati</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      {/* Right Navbar */}
      <div className="right">
        <div className="nav-icon">
          <img src="/nav-icons/wifi.svg" alt="" />
        </div>

        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  )
}

export default Nav