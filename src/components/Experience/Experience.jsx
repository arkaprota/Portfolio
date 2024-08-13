import React from 'react'
import { experiencedata } from '../../data/data'
import { Container, Row,Col } from 'react-bootstrap'
import ExperienceCard from './ExperienceCard'
import './experience.css';
import { Slide } from 'react-awesome-reveal';

const Experience = () => {
  return (
    <section id="experience" className='experience-content p-5'>
      <h2 className="text-center heading mb-5 pt-4" style={{"fontFamily": "cursive",}}> &nbsp; Experience.</h2>
    <Slide direction="up">
    <Container className='d-flex justify-content-center'>
      <Row>
        {experiencedata.map((data)=>(
          <Col key={data.id}>
          <ExperienceCard data={data}/>
          </Col>
        ))}
      </Row>
    </Container>
    </Slide>
    </section>
  )
}

export default Experience