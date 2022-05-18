import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/main-page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import softWareCompany from "../assets/image/software_development.jpg";
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <Container fluid className="main-page mt-5 p-0" dir="rtl">
              <Col xs={12} className="main-page__desc">
                <Row>
                  <Col xs={6} className="main-page__desc__right-side pt-5 pe-0">
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
                      <Link to="/" className="mt-5 text-decoration-none">
                        <button className="shadow d-flex align-items-center pe-2 ps-4 py-3">
                          <span className="px-3">G</span>
                          <span className="mx-3">
                            <b className="d-block">همکار رسمی گوگل</b> در ایران
                          </span>
                        </button>
                      </Link>
                      <Link to="/" className="mt-5 text-decoration-none">
                        <button className="shadow d-flex align-items-center pe-2 ps-4 py-3">
                          <span className="px-3">
                            <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                          </span>
                          <span className="mx-3">
                            <b className="d-block">مشاوره تخصصی</b> به صورت
                            رایگان
                          </span>
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col xs={6} className="main-page__desc__left-side pt-5 pe-5">
                    <img src={softWareCompany} alt="software-company" />
                  </Col>
                </Row>
              </Col>
            </Container>
          </>
        );
    }
}
 
export default MainPage;