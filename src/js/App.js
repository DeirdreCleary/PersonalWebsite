import React, { Component } from 'react';

import About from './components/About';
import Projects from './components/Projects';
import CurriculumVitae from './components/CurriculumVitae';
import Contact from './components/Contact';
import EventPanel from './components/EventPanel';

const App = React.createClass({
  getInitialState() {
    return ({
      selectedTab: 'about'
    });
  },

  handleTabChange(newTab) {
    this.setState({ selectedTab: newTab });
  },

  renderNav() {
    return (
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a onClick={this.handleTabChange.bind(null, 'about')}>About</a></li>
            <li><a onClick={this.handleTabChange.bind(null, 'projects')}>Projects</a></li>
            <li><a onClick={this.handleTabChange.bind(null, 'CurriculumVitae')}>Curriculum Vitae</a></li>
            <li><a onClick={this.handleTabChange.bind(null, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  },

  renderPage() {
    switch (this.state.selectedTab) {
      case 'about':
        return <About/>;
      case 'projects':
        return <Projects/>;
      case 'CurriculumVitae':
        return <CurriculumVitae/>;
      case 'contact':
        return <Contact/>;
      default:
        return <div/>;
    }
  },

  render() {
    return (
      <div className="body">
        <div className="container">
          {this.renderNav()}
          {this.renderPage()}
        </div>
      </div>
    );
  }
});

export default App;
