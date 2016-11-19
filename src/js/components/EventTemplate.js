import React from 'react';

const EventTemplate = React.createClass({

  PropTypes: {
     event1: React.PropTypes.object.isRequired
  },

  render() {

    const { event1 } = this.props;

    return (
      <div className="event-template">
        <div className="inner-event-header">
          <h2>{event1.name}</h2>
        </div>
        <img
          className="event-img"
          src={require(`../../img/${event1.name}.png`)}
          alt={event1.name}
        />
      <div className="event-dates">
        <p>{event1.date}</p>
      </div>
        <div className="event-text">
          <p>{event1.desc}</p>
        </div>
      </div>
    );
  }
});

export default EventTemplate;
