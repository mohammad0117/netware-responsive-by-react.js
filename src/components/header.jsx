import React, { Component, createRef } from "react";
import UsaFlag from "../assets/image/usa-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/image/header_logo.min.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  state = {};
  mainpage = createRef();
  services = createRef();
  portfolio = createRef();
  articles = createRef();
  recruitment = createRef();
  aboutas = createRef();
  contactus = createRef();
  search = createRef();
  items = [
    this.mainpage,
    this.services,
    this.portfolio,
    this.articles,
    this.recruitment,
    this.aboutas,
    this.contactus,
  ];
  render() {
    return (
      <>
        <Container fluid className="header" dir="rtl">
          <Row>
            <Col
              xs={12}
              className="header__bar d-flex justify-content-between align-items-center"
            >
              <Link className="header__bar__link" to="main-page">
                <img src={UsaFlag} alt="usa-flag" />
              </Link>
              <a
                href="#"
                className="header__bar__phone text-decoration-none py-2 px-3"
              >
                <span>
                  021-22009250
                  <FontAwesomeIcon className="me-2" icon={faPhone} />
                </span>
              </a>
            </Col>
            <Col className="header__menu py-5 d-flex justify-content-between align-items-center">
              <Link className="header__menu__logo" to="/">
                <img src={HeaderLogo} alt="header-logo" />
              </Link>
              <ul className="header__menu__items pt-1 ps-0">
                <Link to="/" className="text-decoration-none ms-2 me-5">
                  <li
                    className="active-item"
                    ref={this.mainpage}
                    onClick={this.active(this.mainpage)}
                  >
                    صفحه اصلی
                  </li>
                </Link>
                <Link to="services" className="text-decoration-none mx-2">
                  <li ref={this.services} onClick={this.active(this.services)}>
                    خدمات
                  </li>
                </Link>
                <Link to="portfolio" className="text-decoration-none mx-2">
                  <li
                    ref={this.portfolio}
                    onClick={this.active(this.portfolio)}
                  >
                    نمونه کارها
                  </li>
                </Link>
                <Link to="articles" className="text-decoration-none mx-2">
                  <li ref={this.articles} onClick={this.active(this.articles)}>
                    مقالات
                  </li>
                </Link>
                <Link to="recruiment" className="text-decoration-none mx-2">
                  <li
                    ref={this.recruitment}
                    onClick={this.active(this.recruitment)}
                  >
                    استخدادم
                  </li>
                </Link>
                <Link to="about-us" className="text-decoration-none mx-2">
                  <li ref={this.aboutas} onClick={this.active(this.aboutas)}>
                    درباره ما
                  </li>
                </Link>
                <Link to="contact-us" className="text-decoration-none mx-2">
                  <li
                    ref={this.contactus}
                    onClick={this.active(this.contactus)}
                  >
                    تماس با ما
                  </li>
                </Link>
                <button
                  ref={this.search}
                  onClick={this.toggleActive}
                  className="text-decoration-none me-3"
                  href=""
                >
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  active = (item) => (e) => {
    this.items.map((i) => i.current.classList.remove("active-item"));
    item.current.classList.add("active-item");
  };
  toggleActive = () => {
    this.search.current.classList.toggle("active-item");
  };
}

export default Header;
