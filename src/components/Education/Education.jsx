import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import "./Education.css";

const Education = () => {
  return (
    <section className="education-content p-5" id="education">
      <Container className="p-4">
        <h2
          className="text-center heading mb-5"
          style={{ fontFamily: "cursive" }}
        >
          {" "}
          &nbsp; Education Details.
        </h2>
        <div className="timeline">
          <div className="container-e left-container">
            <div className="timeline-bullet"></div>
            <Card className="shadow-lg p-3 rounded mb-5">
              <Card.Body>
                <Card.Title>
                  Degree : Masters of Technology(M.Tech)
                </Card.Title>
                <Card.Text className="college mb-0">
                  Specilization : Computer Science and Engineering(CSE)
                </Card.Text>
                <Card.Text className="college mb-0">
                  Institute : Techno India University
                </Card.Text>
                <Card.Text className="year mb-3">year : 2021-2023</Card.Text>
                <Card.Text className="grade mb-1">Marks : 7.78 CGPA</Card.Text>
              </Card.Body>
            </Card>
            <span className="left-container-arrow"></span>
          </div>

          <div className="container-e right-container">
            <div className="timeline-bullet"></div>
				<Card className="shadow-lg p-3 rounded mb-5">
              <Card.Body>
                <Card.Title>
                  Degree : Bachelor of Technology(B.Tech)
                </Card.Title>
                <Card.Text className="college mb-0">
                  Specilization : Computer Science and Engineering(CSE)
                </Card.Text>
                <Card.Text className="college mb-0">
                  Institute : Techno India University
                </Card.Text>
                <Card.Text className="year mb-3">year : 2017-2021</Card.Text>
                <Card.Text className="grade mb-1">Marks: 8.11 CGPA</Card.Text>
              </Card.Body>
            </Card>
            <span className="right-container-arrow"></span>
          </div>

          <div className="container-e left-container">
            <div className="timeline-bullet "></div>
				<Card className="shadow-lg p-3 rounded mb-5">
              <Card.Body>
                <Card.Title>
                  Degree : Higher Secondary (Class-XII)
                </Card.Title>
                <Card.Text className="college mb-0">
                  Specilization : Science
                </Card.Text>
                <Card.Text className="college mb-0">
                  Institute : Kendriya Vidyalaya Berhampore
                </Card.Text>
                <Card.Text className="year mb-3">year : 2016-2017</Card.Text>
                <Card.Text className="grade mb-1">Marks : 63.6%</Card.Text>
              </Card.Body>
            </Card>
            <span className="left-container-arrow"></span>
          </div>
          <div className="container-e right-container">
            <div className="timeline-bullet "></div>
				<Card className="shadow-lg p-3 rounded mb-5">
              <Card.Body>
                <Card.Title>
                  Degree : Secondary (Class-X)
                </Card.Title>
                <Card.Text className="college mb-0">
                  Institute : Kendriya Vidyalaya Berhampore
                </Card.Text>
                <Card.Text className="year mb-3">year : 2014-2015</Card.Text>
                <Card.Text className="grade mb-1">Marks : 9.2 CGPA</Card.Text>
              </Card.Body>
            </Card>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
