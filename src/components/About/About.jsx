import React from 'react'
import './About.css';
import { Row, Col } from "react-bootstrap";
import { aboutdata, skillsdata } from '../../data/data';
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about" id="about">
        <h2 className="heading">Who I am?</h2>
        <Zoom>
        <Row>
          <Col xs={8} md={8} className='align-self-center mt-5'>
          <p className="info">{aboutdata.intro}</p>
          <p className='info'>{aboutdata.description}</p>
         <div>
           <h6><b>Tech Stack</b></h6>
            {skillsdata.map((data, i) => (
                  <img key={i} src={data.image} alt={data.name} className="tech-icon p-1" />
                ))}
            
         </div>
          </Col>
          <Col className='align-self-center'>
          <img src={aboutdata.image} height="400" width="300" alt="your image" className='align-self-center pb-4'/>
          </Col>
        </Row>
        </Zoom>
    </div>
  )
}

export default About