import React from 'react';
import Deirdre from '../../img/Deirdre.jpg';

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Deirdre Cleary</h1>
          <p>Computer Science and Software Engineering Student | Maynooth University</p>
        </div>
        <div className="content">
          <img className="image" src={Deirdre} alt="Deirdre" height={200}/>
          <p>
            Hi there! I'm a third year computer science and software engineering student at Maynooth University. Welcome to my website!
          </p>
          <p>
            I'm always looking for opportunities to get involved, both with computer science related events and at university. Over the past three years I have been the technical officer for the student radio station, <a href="http://marsfm.ie">Mars FM</a>, vice president and public relations officer for the MU Gospel Choir and secretary of <a href = "https://socit.maynoothuniversity.ie/">SocIT</a>, the computer science society. Check out some of the events I've attended on my Projects page!
          </p>
        </div>
      </div>
    );
  }
});

export default About;
