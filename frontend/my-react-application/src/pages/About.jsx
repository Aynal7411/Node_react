import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
        <h1>About Me</h1>
      </div>

      <p className="bio">
        Hi! I'm a MERN Stack Developer with experience in building web applications
        using Node.js, React, and MongoDB. I love creating clean, responsive, and
        interactive user interfaces.
      </p>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>React.js & Redux</li>
        <li>Node.js & Express</li>
        <li>MongoDB & Mongoose</li>
        <li>HTML5 & CSS3</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
};

export default About;
