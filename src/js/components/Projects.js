import React, { Component } from 'react';

import EventPanel from './EventPanel';

const Projects = React.createClass({
  render() {
    const events = require('../../JSON/myEvents.json');

    return (
      <div>
        <div className="jumbotron">
        <h1>CS outside the classroom</h1>
        <p>I'm always looking for opportunities to get involved with CS outside of day-to-day college. Here are a few!</p>
        </div>
          <div className='App'>
            <div className="event-app">
              <EventPanel
                events={events.events}
              />
            </div>
          </div>
      </div>
    );
  }
});

export default Projects;
