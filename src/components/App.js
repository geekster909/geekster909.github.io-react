import React, { Component } from 'react';
import '../css/style.scss';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Footer />
      </div>

    );
  }
}

export default App;
