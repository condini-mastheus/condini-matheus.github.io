import React, { Component } from 'react';
import './styles/App.css';
import './styles/responsive.css';

import Header from './components/Header';
import Home from './components/Home';
import Inspirations from './components/Inspirations';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Inspirations />
        <Projects />
        <Tecnologies />
      </div>
    );
  }
}

export default App;
