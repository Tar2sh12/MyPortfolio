import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Tarek </span>
            from <span className="purple"> Egypt, Cairo.</span>
            <br />
            I’m currently in my 4th year of studying Computer Science at Helwan University, with a major in Software Engineering.
            <br /><br />
            At the moment, I am focused on developing my backend skills through a Node.js course as part of a Route Backend Diploma.
            I’m passionate about enhancing my expertise in software development and excited to apply what I’m learning in practical projects.
            
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
