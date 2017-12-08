import React, { Component } from 'react';
import jblogo from '../images/JB_Logo-white-transparent.png';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="header--img">
            <img src={jblogo} alt="logo"/>
          </div>
          <div className="header--nav">
            <nav className="main-navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#my-work">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <div className="nav--social">                    
              <a href="" target="_blank"><i className="fa fa-github fa-lg"></i></a>
              <a href="" target="_blank"><i className="fa fa-linkedin-square fa-lg"></i></a>
              <a href="" target="_blank"><i className="fa fa-codepen fa-lg"></i></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
