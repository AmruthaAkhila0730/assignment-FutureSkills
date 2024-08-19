import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{height: '100vh'}}>
      <Container>
        <Row>
          <Col md={3}>
            <h4>Abstract</h4>
            <ul className='p-0 list-unstyled'>
              <li><a href="#option1" className='text-decoration-none text-light'>Branches</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Resources</h4>
            <ul style={{listStyle: 'none'}} className='p-0'>
              <li><a href="#option1" className='text-decoration-none text-light'>Blog</a></li>
              <li><a href="#option2" className='text-decoration-none text-light'>Help Center</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Release Notes</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Status</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Community</h4>
            <ul style={{listStyle: 'none'}} className='p-0'>
              <li><a href="#option1" className='text-decoration-none text-light'>Twitter</a></li>
              <li><a href="#option2" className='text-decoration-none text-light'>LinkedIn</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Facebook</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Dribble</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Podcast</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Company</h4>
            <ul style={{marginBottom: '20px', listStyle: 'none'}} className='p-0'>
              <li><a href="#option1" className='text-decoration-none text-light'>About Us</a></li>
              <li><a href="#option2" className='text-decoration-none text-light'>Careers</a></li>
              <li><a href="#option3" className='text-decoration-none text-light'>Legal</a></li>
            </ul>
            <h5>Contact Us</h5>
            <a href='mailto:info@abstract.com' className='text-decoration-none text-light'>info@abstract.com</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
