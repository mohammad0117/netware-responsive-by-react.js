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
            <Container fluid className="main-page mt-4" dir="rtl">
              <Col xs={12} className="main-page__desc">
                <Row className="flex-column-reverse flex-lg-row">
                  <Col
                    xs={12}
                    lg={6}
                    className="main-page__desc__right-side pt-5 pe-lg-5"
                  >
                    <p className="text-center text-lg-end pe-lg-4">
                      استودیو دیجیتال مارکتینگ نت ابزار
                    </p>
                    <h1 className="mt-2 text-center text-lg-end pe-lg-4">
                      ارائـه خدمات هوشـمند برای رونـق کسـب و کـار شـما
                    </h1>
                    <ul className="p-0 pe-lg-4 mt-4 mt-lg-5 text-center text-lg-end">
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
                    <div className=" d-flex justify-content-around px-3 px-lg-0 justify-content-lg-between">
                      <Link to="/" className="mt-5 text-decoration-none">
                        <button className="shadow d-flex flex-column align-items-center justify-content-center px-1 py-4 me-4 flex-lg-row py-lg-3 px-lg-3">
                          <span className="px-3 p-lg-2 py-lg-0">G</span>
                          <span className="mx-3 mt-3 mt-lg-0 mx-lg-1">
                            <b className="d-block">همکار رسمی گوگل</b> در ایران
                          </span>
                        </button>
                      </Link>
                      <Link to="/" className="mt-5 text-decoration-none">
                        <button className="shadow d-flex flex-column align-items-center px-1 py-4 ms-4 flex-lg-row py-lg-3 px-lg-3 ms-lg-0">
                          <span className="px-3 p-lg-2 py-lg-0">
                            <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                          </span>
                          <span className="mx-3 mt-3 mt-lg-0 mx-lg-1">
                            <b className="d-block">مشاوره تخصصی</b> به صورت
                            رایگان
                          </span>
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="main-page__desc__left-side pt-3 d-flex justify-content-center "
                  >
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