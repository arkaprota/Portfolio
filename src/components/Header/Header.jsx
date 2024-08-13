import React from 'react'
import { faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import image from '../../assets/image/developer_4.png';
import { Typewriter } from 'react-simple-typewriter'
import './Header.css';
import { homedata } from '../../data/data';
import CircleButton from '../CircleButton/CircleButton';

const Header = () => {
  return (
    <section className="home" id="home"  style={{backgroundColor:"#1f293a", color:"#fff"}}>
        <Container>
          <Row className='d-flex align-items-center'>
            <Col md={6} sm={4} className="home-content">
          <h5 className="mb-3">{homedata.intro}</h5>
          <h1 className="mb-4 name">{homedata.name}</h1>
          <h3 className="mb-4">I Am <span className='text-primary'>
            <Typewriter 
            words={homedata.tech}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/>
          </span></h3>
          <div className='icons-button-container mt-1'>
            <CircleButton icon={faGithub} onClick={()=>handleClick('https://github.com/Arkaprota')} />
            <CircleButton icon ={faLinkedinIn} onClick={()=>handleClick('https://www.linkedin.com/in/arkaprota-ghosh-a0506521a/')} />
        </div>
          <button className='outline-button'><a href="#contact">Get in Touch</a></button>
          </Col>
          <Col className="home-pic"  md={6} sm={4}>
          <img src={image} height={100} alt="Program" />
          </Col>
          </Row>
        </Container>
    </section>
  )
}
export default Header;