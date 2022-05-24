import React, { Component, createRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/main-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import softWareCompany from "../assets/image/software_development.jpg";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import softWareDeveloper from '../assets/image/software_developer.jpeg'
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import woman from '../assets/image/woman_fontware_eng.webp'
class MainPage extends Component {
  state = {};
  scrolltopbutton = createRef();
  render() {
    return (
      <>
        <Container fluid className="main-page mt-4 p-0" dir="rtl">
          <Col xs={12} className="main-page__desc position-relative px-3">
            <Row className="flex-column-reverse flex-lg-row">
              <Col
                xs={12}
                lg={6}
                className="main-page__desc__right-side pt-5 ps-0"
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
                <div className=" d-flex justify-content-around px-3 px-lg-4 px-xxl-0 justify-content-lg-between">
                  <Link to="/" className="mt-5 text-decoration-none">
                    <button className="shadow d-flex flex-column align-items-center justify-content-center px-1 py-4 me-4 flex-lg-row py-lg-3 me-lg-0 px-lg-3 me-xxl-4">
                      <span className="px-3 p-lg-2 py-lg-0 px-xxl-3">G</span>
                      <span className="mx-3 mt-3 mt-lg-0 mx-lg-1 me-xxl-2 ms-xxl-4">
                        <b className="d-block">همکار رسمی گوگل</b> در ایران
                      </span>
                    </button>
                  </Link>
                  <Link to="/" className="mt-5 text-decoration-none">
                    <button className="shadow d-flex flex-column align-items-center px-1 py-4 ms-4 flex-lg-row py-lg-3 px-lg-3 ms-lg-0">
                      <span className="px-3 p-lg-2 py-lg-0 px-xxl-3">
                        <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                      </span>
                      <span className="mx-3 mt-3 mt-lg-0 mx-lg-1 me-xxl-2 ms-xxl-4">
                        <b className="d-block">مشاوره تخصصی</b> به صورت رایگان
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
            <button
              onClick={this.scrollTop}
              ref={this.scrolltopbutton}
              className="main-page__button"
            >
              <FontAwesomeIcon
                icon={faAngleUp}
                className="fa-angle-up"
              ></FontAwesomeIcon>
            </button>
          </Col>
          <Col xs={12} className="main-page__items px-lg-3">
            <div className="main-page__items__wrapper grid pt-3 py-lg-5">
              <Col lg={4} className="d-none d-lg-block">
                <div className="main-page__items__wrapper__card picture px-0">
                  <img src={softWareDeveloper} alt="" />
                </div>
              </Col>
              <Col lg={4}>
                <div className="main-page__items__wrapper__card second d-flex flex-column justify-content-center mx-3 mx-lg-0  pt-lg-5">
                  <FontAwesomeIcon
                    className="fa-time-line mt-5"
                    icon={faTimeline}
                  ></FontAwesomeIcon>
                  <div className="text-center my-4">
                    <button className="">بازاریابی آنلاین</button>
                  </div>
                  <p className="text-center px-3">
                    کمپین های بازاریابی بازاریابی در شبکه های اجتماعی تبلیغات در
                    گوگل
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="main-page__items__wrapper__card third d-flex flex-column justify-content-center mx-3 mx-lg-0 pt-lg-5">
                  <FontAwesomeIcon
                    className="fa-time-line mt-5"
                    icon={faPalette}
                  ></FontAwesomeIcon>
                  <div className="text-center my-4">
                    <button className="">طراحی گرافیکی</button>
                  </div>
                  <p className="text-center px-3">
                    طراحی لوگو طراحی گرافیکی برند طراحی تراکت و طراحی گرافیکی وب
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="main-page__items__wrapper__card fourth d-flex flex-column justify-content-center mx-3 mx-lg-0 pt-4 pt-lg-5 mt-lg-5">
                  <FontAwesomeIcon
                    className="fa-time-line mt-5"
                    icon={faFileAlt}
                  ></FontAwesomeIcon>
                  <div className="text-center my-4">
                    <button className="">نرم افزار سفارشی</button>
                  </div>
                  <p className="text-center px-4">
                    طراحی و تجزیه و تحلیل برنامه نویسی و پیاده سازی آزمایش و
                    نگهداری
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="main-page__items__wrapper__card fifth d-flex flex-column justify-content-center mx-3 mx-lg-0 mt-lg-5 pt-lg-4">
                  <FontAwesomeIcon
                    className="fa-time-line mt-5"
                    icon={faMagnifyingGlassPlus}
                  ></FontAwesomeIcon>
                  <div className="text-center my-4">
                    <button className="">خدمات سیو</button>
                  </div>
                  <p className="text-center px-3">
                    افزایش رتبه سایت نمایش در صفحات اول گوگل و برتری در کلمات
                    رقابتی
                  </p>
                </div>
              </Col>
              <Col lg={4} className="d-none d-lg-block">
                <div className="main-page__items__wrapper__card picture  d-none d-lg-block px-0 mt-lg-5">
                  <img src={woman} alt="" />
                </div>
              </Col>
            </div>
          </Col>
        </Container>
      </>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        this.scrolltopbutton.current.style.display = "block";
      } else {
        this.scrolltopbutton.current.style.display = "none";
      }
    });
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

export default MainPage;
