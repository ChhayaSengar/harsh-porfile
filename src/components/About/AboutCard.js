import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Harsh Vardhan Singh </span>
             <span> a passionate Frontend Web Developer.</span>
            <br />
            I specialize in building modern, responsive websites and web applications using the latest technologies like HTML5, CSS3, JavaScript, React, and Vue.js.
            <br />
            I am pursing B.C.A at Galgotias University, Noida U.P.
           
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"> Harsh Vardhan Singh </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
