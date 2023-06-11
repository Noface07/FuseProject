import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
      <Container>
        <Row>
          <Col md={8} className="text-center text-md-left">
            <Image src="./images/Prod/la.jpg" fluid className="mb-3" alt="Large Image"  />
          </Col>
          <Col md={4} className="text-center">
            <Row>
              <Col sm={6}>
                <Image src="./images/image1.jpg" fluid className="mb-3" alt="small Image 1" />
              </Col>
              <Col sm={6}>
                <Image src="./images/Prod/lb.jpg" fluid className="mb-3" alt="small Image 2" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Footer;