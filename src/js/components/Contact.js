import React from 'react';

const Contact = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Let's connect</h1>
          <p>Check out my online presence. I look forward to hearing from you!</p>
          <a className="social-icon" href="https://www.instagram.com/deirdre_cleary/" target="_blank">
            <i className="fa fa-instagram fa-2x"/>
          </a>
          <a className="social-icon" href="https://github.com/deirdrecleary" target="_blank">
            <i className="fa fa-github fa-2x"/>
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/deirdre-cleary" target="_blank">
            <i className="fa fa-linkedin fa-2x"/>
          </a>
        </div>
      </div>
    );
  }
});

export default Contact;
