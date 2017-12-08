import React, { Component } from 'react';
import jblogo from '../images/JB_Logo-white-transparent.png';

class Footer extends Component {
  render() {
    const { social } = this.props;

    return (
      <footer className="site-footer">
        <div className="container">
            <div className="footer--blocks">
              <div className="footer--block-1">
                <span>Email</span> <br /> <a href="mailto:bond.justink@gmail.com" target="_blank" rel="noopener noreferrer">bond.justink@gmail.com</a>
              </div>
                <div className="footer--block-2">
                    <img src={jblogo} alt="logo"/>
                </div>
                <div className="footer--block-3">
                    <span>Connect</span> <br /> 
                    <div className="footer--social">
                        <a href={social.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg"></i></a>
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-lg"></i></a>
                        <a href={social.codepen} target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer--copyright">
            <div className="l-container">
                &copy; 2017 · Justin K. Bond · ALL RIGHTS RESERVED
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
