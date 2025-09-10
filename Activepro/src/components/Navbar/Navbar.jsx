import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className="container-fluid">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4">APPLE PHONES</span>
    </a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="#" className="nav-link " aria-current="page">
          iphone
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          ipad
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          watch
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          airpods
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          contact
        </a>
      </li>
    </ul>
  </header>
</div>

  )
}

