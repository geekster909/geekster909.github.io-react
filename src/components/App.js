import React, { Component } from 'react';
import '../css/style.scss';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.social = {
      github: 'https://github.com/geekster909/',
      linkedin: 'https://www.linkedin.com/in/justinbond909/',
      codepen: 'https://codepen.io/geekster909/'
    }
  }
  render() {
    return (
      <div className="App">
        <Header social={this.social} />
        <Projects />
        <Footer social={this.social} />
      </div>

    );
  }
}

export default App;
