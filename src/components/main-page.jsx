import React, { Component, createRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/main-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import softWareCompany from "../assets/image/software_development.jpg";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import softWareDeveloper from "../assets/image/software_developer.jpeg";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import woman from "../assets/image/woman_fontware_eng.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import exPic from "../assets/image/experience.jpg";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import meeting from "../assets/image/meeting1.jpg";
import chair from '../assets/image/chair.jpg'
import veg from '../assets/image/vegetables.jpg'
import glass from '../assets/image/glasses.jpg'
import sofa  from '../assets/image/sofa.jpg'
import dentist from '../assets/image/dentist.jpeg'
import officeChair from '../assets/image/office_chair.jpg'
class MainPage extends Component {
  state = {};
  scrolltopbutton = createRef();
  button = createRef();
  secondbutton = createRef();
  render() {
    return (
      <>
        <Container fluid className="main-page mt-4 p-0" dir="rtl">
          <Col xs={12} className="main-page__desc position-relative pt-5">
            <Row className="flex-column-reverse flex-lg-row">
              <Col
                xs={12}
                lg={6}
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="900"
                className="pt-5"
              >
                <div className="main-page__desc__right-side">
                  <p className="text-center text-lg-end">
                    استودیو دیجیتال مارکتینگ نت ابزار
                  </p>
                  <h1 className="mt-2 text-center text-lg-end">
                    ارائـه خدمات هوشـمند برای رونـق کسـب و کـار شـما
                  </h1>
                  <ul className="p-0  mt-4 mt-lg-5 text-center text-lg-end">
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
                  <div className=" d-flex justify-content-around  px-xxl-0 justify-content-lg-between">
                    <Link to="/" className="mt-5 text-decoration-none">
                      <button className="shadow d-flex flex-column align-items-center justify-content-center px-1 py-4 me-4 flex-lg-row py-lg-3 me-lg-0 px-lg-3">
                        <span className="px-3 p-lg-2 py-lg-0 px-xxl-3">G</span>
                        <span className="mx-3 mt-3 mt-lg-0 mx-lg-1 me-xxl-2 ms-xxl-4">
                          <b className="d-block">همکار رسمی گوگل</b> در ایران
                        </span>
                      </button>
                    </Link>
                    <Link to="/" className="mt-5 text-decoration-none">
                      <button className="shadow d-flex flex-column align-items-center px-1 py-4 ms-4 flex-lg-row py-lg-3 px-lg-3 ms-xxl-1">
                        <span className="px-3 p-lg-2 py-lg-0 px-xxl-3">
                          <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                        </span>
                        <span className="mx-3 mt-3 mt-lg-0 mx-lg-1 me-xxl-2 ms-xxl-4">
                          <b className="d-block">مشاوره تخصصی</b> به صورت رایگان
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                lg={6}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
                className=" pt-3 d-flex flex-row-reverse"
              >
                <div className="main-page__desc__left-side">
                  <img
                    className="img-fluid"
                    src={softWareCompany}
                    alt="software-company"
                  />
                </div>
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
          <Col xs={12} className="main-page__items bg-white">
            <div className="main-page__items__wrapper grid pt-3 py-lg-5">
              <Col lg={4} className="d-none d-lg-block">
                <div className="main-page__items__wrapper__card picture px-0">
                  <img src={softWareDeveloper} alt="" />
                </div>
              </Col>
              <Col lg={4} className="d-flex justify-content-center">
                <div className="main-page__items__wrapper__card second d-flex flex-column justify-content-center mx-3 mx-lg-0  pt-lg-5">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        className="fa-time-line mt-5"
                        icon={faTimeline}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="text-center my-4">
                      <button className="">بازاریابی آنلاین</button>
                    </div>
                    <p className="text-center px-3">
                      کمپین های بازاریابی بازاریابی در شبکه های اجتماعی تبلیغات
                      در گوگل
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="d-flex flex-row-reverse">
                <div className="main-page__items__wrapper__card third d-flex flex-column justify-content-center mx-3 mx-lg-0 pt-lg-5">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        className="fa-time-line mt-5"
                        icon={faPalette}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="text-center my-4">
                      <button className="">طراحی گرافیکی</button>
                    </div>
                    <p className="text-center px-3">
                      طراحی لوگو طراحی گرافیکی برند طراحی تراکت و طراحی گرافیکی
                      وب
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="main-page__items__wrapper__card fourth d-flex flex-column justify-content-center mx-3 mx-lg-0 pt-4 pt-lg-5 mt-lg-4 mt-xl-5">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        className="fa-time-line mt-5"
                        icon={faFileAlt}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="text-center my-4">
                      <button className="">نرم افزار سفارشی</button>
                    </div>
                    <p className="text-center px-4">
                      طراحی و تجزیه و تحلیل برنامه نویسی و پیاده سازی آزمایش و
                      نگهداری
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="d-flex justify-content-center">
                <div className="main-page__items__wrapper__card fifth d-flex flex-column justify-content-center mx-3 mx-lg-0 mt-lg-4 pt-lg-4 mt-xl-5">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        className="fa-time-line mt-5"
                        icon={faMagnifyingGlassPlus}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="text-center my-4">
                      <button className="">خدمات سیو</button>
                    </div>
                    <p className="text-center px-3">
                      افزایش رتبه سایت نمایش در صفحات اول گوگل و برتری در کلمات
                      رقابتی
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="d-flex flex-row-reverse">
                <div className="main-page__items__wrapper__card picture  d-none d-lg-block px-0 mt-lg-4 mt-xl-5">
                  <img src={woman} alt="" />
                </div>
              </Col>
            </div>
          </Col>
          <Col xs={12} className="main-page__introduction bg-white">
            <Row className="flex-column-reverse flex-lg-row">
              <Col
                xs={12}
                lg={6}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
                className="pe-lg-4"
              >
                <div className="main-page__introduction__right-side">
                  <h1 className="position-relative text-center text-lg-end">
                    چرا استدیو نت ابزار؟
                  </h1>
                  <p className="text-center text-lg-end">
                    در استدیو نت ابزار ما تیمی از طراحان، برنامه نویسان و توسعه
                    دهندگان با تجربه جمع آوری کرده ایم که با کیفیت ترین محصولات
                    و خدمات را ارائه داده و بهترین تجربه ی کاری را برای شما
                    ایجاد می کنند. اعضای تیم ما با تلاش و تحقیقات بی وقفه در
                    زمینه طراحی وب و تولید نرم افزار توانسته اند محصول خود را با
                    استفاده از پیشرفته ترین تکنیک ها تولید کرده و رضایت خاطر
                    مشتریان خود را از ابتدا تا انتهای کار بدست بیاورند.
                  </p>
                  <p className="mt-5 text-center text-lg-end">
                    "هدف اصلی ما در استدیو نت ابزار توسعه و رونق کسب و کار
                    شماست."
                  </p>
                  <div className="mt-5 text-center text-lg-end">
                    <button
                      ref={this.button}
                      onMouseEnter={this.hoverButton}
                      onMouseLeave={this.onHoverButton}
                      className="px-5 py-3"
                    >
                      بیشتر بدانیم
                    </button>
                  </div>
                </div>
              </Col>
              <Col
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="900"
                xs={12}
                lg={6}
                className="d-flex justify-content-center justify-content-lg-end"
              >
                <div className="main-page__introduction__left-side position-relative mt-3">
                  <img src={exPic} alt="experience-picture" />
                  <div className="position-absolute py-5 px-4 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="fa-trophy mx-3 mb-2"
                    ></FontAwesomeIcon>
                    <p>
                      <span className="d-block">بیش از 7 سال تجربه مستمر</span>
                      <span className="d-block mt-3">
                        ارایه خدمات دیجیتال از سال 2013
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="main-page__introducing-team">
            <div className="main-page__introducing-team__wrapper position-relative d-flex flex-column align-items-center px-3">
              <img className="position-absolute" src={meeting} alt="meeting" />
              <p className="px-5 py-3 text-center">
                قدم های بزرگ در یک کسب و کار هیچ وقت نه توسط یک نفر بلکه توسط یک
                تیم خلاق برداشته میشود.
              </p>
              <button
                ref={this.secondbutton}
                onMouseEnter={this.hover}
                onMouseLeave={this.onHover}
                className="mt-3 py-2 px-4"
              >
                آشنایی با تیم ما
              </button>
            </div>
          </Col>
          <Col xs={12} className="main-page__latest-portfolio px-3">
            <div className="main-page__latest-portfolio__wrapper d-flex flex-column align-items-center">
              <h2 className="position-relative">جدیدترین نمونه کارها</h2>
              <p className="text-center mt-5 px-2">
                مشاهده نمونه کارهای اجرا شده توسط شرکت ها بهترین راه برای محک
                زدن توانایی های آنها در حوزه کاری خود است. در اینجا چند نمونه از
                آخرین پروژه های ما را مشاهده میکنید.
              </p>
            </div>
            <Row className="mt-5 wrapper">
              <Col xs={4}>
                <div className="main-page__latest-portfolio__card">
                  <img className="img-fluid" src={chair} alt="chair" />
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-center">
                <div className="main-page__latest-portfolio__card">
                  <img className="img-fluid" src={veg} alt="veg" />
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-end">
                <div className="main-page__latest-portfolio__card">
                  <img src={glass} alt="glasses" />
                </div>
              </Col>
              <Col xs={4} className='mt-5'>
                <div className="main-page__latest-portfolio__card">
                  <img className="img-fluid" src={sofa} alt="sofa" />
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-center mt-5">
                <div className="main-page__latest-portfolio__card">
                  <img className="img-fluid" src={dentist} alt="dentist" />
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-end mt-5">
                <div className="main-page__latest-portfolio__card">
                  <img src={officeChair} alt="office-chair" />
                </div>
              </Col>
            </Row>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
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
    AOS.init();
    AOS.refresh();
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  hoverButton = () => {
    this.button.current.style.transition = "border-radius 0.3s ease";
    this.button.current.style.borderRadius = "10px";
    this.button.current.style.backgroundColor = "#267ffd";
  };
  onHoverButton = () => {
    this.button.current.style.transition = "border-radius 0.3s ease";
    this.button.current.style.borderRadius = "30px";
    this.button.current.style.backgroundColor = "#000";
  };
  hover = () => {
    this.secondbutton.current.style.transition = "border-radius 0.3s ease";
    this.secondbutton.current.style.borderRadius = "10px";
    this.secondbutton.current.style.backgroundColor = "#fff";
    this.secondbutton.current.style.color = "#000";
  };
  onHover = () => {
    this.secondbutton.current.style.transition = "border-radius 0.3s ease";
    this.secondbutton.current.style.borderRadius = "30px";
    this.secondbutton.current.style.backgroundColor = "transparent";
    this.secondbutton.current.style.color = "#fff";
  };
}

export default MainPage;
