import React, { Component } from 'react';

import EventTemplate from './EventTemplate';

const EventPanel = React.createClass({

  propTypes: {
    events: React.PropTypes.array.isRequired
  },


  renderEventTemplates() {
    const { events } = this.props;

    return events.map((event1) =>
      <div key={event1.name}>
        <EventTemplate
          event1={event1}
        />
    </div>
    );
  },

  render() {
    const eventTemplates = this.renderEventTemplates();

    return (
      <div className="event-panel">
        {eventTemplates}
      </div>
    );
  }
});

export default EventPanel;
