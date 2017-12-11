import React, { Component } from 'react';
import introBgImage from '../images/Website-Design-Background-1.jpg';

class Intro extends Component {
  render() {
    const mainHeroStyle = {
      backgroundImage: `url("${introBgImage}")`
    }

    return (
      <section className="main--hero" style={mainHeroStyle}>
        <div className="about-me">
          <p>I am an experienced Web Developer from Chino Hills, California. I am a proud alumnus of the California State Polytechnic University at Pomona with a degree in Business Administration with a emphasis in Computer Information Systems. When I’m not building websites or computers, I’m riding motorcycles or teeing off in the Palm Springs golf circuit.</p>
          <div className="home--occupation">
            Current Occupation: Web Developer at <a href="http://530medialab.com" target="_blank" rel="noopener noreferrer">530MediaLab</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
