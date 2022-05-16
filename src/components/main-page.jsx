import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/css/main-page.css'
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <Container fluid className="main-page mt-5" dir='rtl'>
              <Col xs={12} className="main-page__desc">
                <Row>
                  <Col xs={6}>123</Col>
                  <Col xs={6}>123</Col>
                </Row>
              </Col>
            </Container>
          </>
        );
    }
}
 
export default MainPage;