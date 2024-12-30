import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
  return (
    <>
    <nav className="dashboard-container">
  <div className="header-banner">
    <p>Offer Now: Exclusive Discounts Available!</p>
  </div>
</nav>

    

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand">
      <img src={`${process.env.PUBLIC_URL}/images/Serendipity_logo.png`} alt="Serendipity Logo" style={{ height: '40px' }} />
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#"><CiShoppingCart style={{ fontSize: '30px' }} /></NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Header
