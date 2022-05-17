import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/main-page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <Container fluid className="main-page mt-5 p-0" dir="rtl">
              <Col xs={12} className="main-page__desc">
                <Row>
                  <Col xs={6} className="main-page__desc__right-side pt-5">
                    <p>استودیو دیجیتال مارکتینگ نت ابزار</p>
                    <h1 className="mt-2">
                      ارائـه خدمات هوشـمند برای رونـق کسـب و کـار شـما
                    </h1>
                    <ul className="p-0 mt-4">
                      <li className="d-inline-block me-1 ms-4 position-relative">
                        برنامه ریزی
                      </li>
                      <li className="d-inline-block mx-4 position-relative">
                        طراحی
                      </li>
                      <li className="d-inline-block mx-4 position-relative">
                        توسعه
                      </li>
                    </ul>
                    <div className="mt-5 d-flex justify-content-between">
                      <Link to="/" className="mt-5">
                        <button className='d-flex align-items-center'>
                          <span className='mx-2'>G</span>
                          همکار رسمی گوگل در ایران
                        </button>
                      </Link>
                      <Link to="/" className="mt-5">
                        <button>
                          مشاوره تخصصی به صورت رایگان
                          <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col xs={6} className="bg-danger">
                    123
                  </Col>
                </Row>
              </Col>
            </Container>
          </>
        );
    }
}
 
export default MainPage;