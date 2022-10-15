import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className='navbar-brand' to="/" element = {<HomeScreen />}>useContext</Link>
            {/* <a className="navbar-brand" href="#">useContext</a> */}

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink  className="nav-link" aria-current="page" to="/" element={<HomeScreen/>}>Home</NavLink>
                    <NavLink  className="nav-link" to="/about" element={<AboutScreen />}>About</NavLink>
                    <NavLink  className="nav-link" to="/login" element={<LoginScreen />}>Login</NavLink>
                </div>
            </div>
        </nav>   
  )
}
