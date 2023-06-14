import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="pt-4">
    <Row>
      <Col md={8} className="text-center text-md-left">
        <Image src={require('./images/Prod/ra.jpg')} height="872.4" width="655.01" className="mb-3" />
      </Col>
      <Col md={4} className="text-center">
        <Row>
          <Col sm={12} className="mb-3">
            <Image src={require('./images/Prod/la.jpg')} height="425.6" width="316.76" className="mb-3" />
          </Col>
          <Col sm={12}>
            <Image src={require('./images/Prod/lb.jpg')} height="425.6" width="316.76" className="mb-3" />
          </Col>
        </Row>
      </Col>
    </Row>
    
    <Row className="mt-4" >
          <Col className="mt-4">
            <Image src={require('./images/Prod/a.jpg')} height="425.6" width="485.885" className="mb-3" />
          </Col>
          <Col >
            <Image src={require('./images/Prod/b.jpg')} height="425.6" width="485.885" className="mb-3" />
          </Col>
        </Row>

    <Row className="mt-4">
      <Col>
      <Image src={require('./images/Prod/a.jpg')} height="425.6" width="323.923" className="mb-3" />
      </Col>
      <Col>
      <Image src={require('./images/Prod/a.jpg')} height="425.6" width="323.923" className="mb-3" />
      </Col>
      <Col>
      <Image src={require('./images/Prod/a.jpg')} height="425.6" width="323.923" className="mb-3" />
      </Col>
    </Row>
  </Container>
  );
};

export default Footer;