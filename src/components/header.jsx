import React, { Component, createRef } from "react";
import UsaFlag from "../assets/image/usa-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/image/header_logo.min.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  state = {};
  mainpage = createRef();
  services = createRef();
  portfolio = createRef();
  articles = createRef();
  recruitment = createRef();
  aboutus = createRef();
  contactus = createRef();
  search = createRef();
  searchbox = createRef();
  mainpagedrop = createRef();
  servicesdrop = createRef();
  portfoliodrop = createRef();
  articlesdrop = createRef();
  recruitmentdrop = createRef();
  aboutusdrop = createRef();
  contactusdrop = createRef();
  dropdownicon = createRef();
  dropdownmenu = createRef();
  items = [
    this.mainpage,
    this.services,
    this.portfolio,
    this.articles,
    this.recruitment,
    this.aboutus,
    this.contactus,
  ];
  itemsdrop = [
    this.mainpagedrop,
    this.servicesdrop,
    this.portfoliodrop,
    this.articlesdrop,
    this.recruitmentdrop,
    this.aboutusdrop,
    this.contactusdrop,
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
              <Link
                className="header__bar__link me-2 me-sm-5 me-md-5 me-lg-5"
                to="main-page"
              >
                <img src={UsaFlag} alt="usa-flag" />
              </Link>
              <a
                href="#"
                className="header__bar__phone text-decoration-none p-2 ms-2 ms-sm-5 ms-md-5 ms-lg-5"
              >
                <span>
                  021-22009250
                  <FontAwesomeIcon className="me-2" icon={faPhone} />
                </span>
              </a>
            </Col>
            <Col className="header__menu d-flex justify-content-between align-items-center mt-4">
              <Link className="header__menu__logo me-2" to="/">
                <img src={HeaderLogo} alt="header-logo" />
              </Link>
              <div className="header__menu__dropdown position-relative">
                <button
                  ref={this.dropdownicon}
                  onClick={this.toggleDropDown}
                  className="header__menu__dropdown__icon"
                >
                  <span className="line-one d-block"></span>
                  <span className="line-two mt-1 d-block"></span>
                  <span className="line-three mt-1 d-block"></span>
                </button>
                <ul
                  ref={this.dropdownmenu}
                  onClick={this.toggleDropDown}
                  className="bg-white p-0 position-absolute"
                >
                  <Link
                    to="/"
                    className="header__menu__dropdown__option mt-2 d-block"
                  >
                    <li
                      className="active-item"
                      ref={this.mainpagedrop}
                      onClick={()=>{this.activeDrop(this.mainpagedrop);this.dropDownDisplay()}}
                    >
                      صفحه اصلی
                    </li>
                  </Link>
                  <Link
                    to="services"
                    className="header__menu__dropdown__option d-block my-2 "
                  >
                    <li
                      ref={this.servicesdrop}
                      onClick={()=>{this.activeDrop(this.servicesdrop);this.dropDownDisplay()}}
                    >
                      خدمات
                    </li>
                  </Link>
                  <Link
                    to="portfolio"
                    className="header__menu__dropdown__option d-block my-2 "
                  >
                    <li
                      ref={this.portfoliodrop}
                      onClick={()=>{this.activeDrop(this.portfoliodrop);this.dropDownDisplay()}}
                    >
                      نمونه کارها
                    </li>
                  </Link>
                  <Link
                    to="articles"
                    className="header__menu__dropdown__option  d-block my-2 "
                  >
                    <li
                      ref={this.articlesdrop}
                      onClick={()=>{this.activeDrop(this.articlesdrop);this.dropDownDisplay()}}
                    >
                      مقالات
                    </li>
                  </Link>
                  <Link
                    to="recruiment"
                    className="header__menu__dropdown__option  d-block my-2 "
                  >
                    <li
                      ref={this.recruitmentdrop}
                      onClick={()=>{this.activeDrop(this.recruitmentdrop);this.dropDownDisplay()}}
                    >
                      استخدام
                    </li>
                  </Link>
                  <Link
                    to="about-us"
                    className="header__menu__dropdown__option  d-block my-2 "
                  >
                    <li
                      ref={this.aboutusdrop}
                      onClick={()=>{this.activeDrop(this.aboutusdrop);this.dropDownDisplay()}}
                    >
                      درباره ما
                    </li>
                  </Link>
                  <Link
                    to="contact-us"
                    className="header__menu__dropdown__option  d-block my-2 "
                  >
                    <li
                      ref={this.contactusdrop}
                      onClick={()=>{this.activeDrop(this.contactusdrop);this.dropDownDisplay()}}
                    >
                      تماس با ما
                    </li>
                  </Link>
                  <div className="mt-4 position-relative">
                    <input
                      type="text"
                      className="p-3 pe-3"
                      placeholder="جستجو"
                    />
                    <button>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="fa-search position-absolute"
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                </ul>
              </div>
              <ul className="header__menu__items pt-1 ps-0 d-none">
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
                    استخدام
                  </li>
                </Link>
                <Link to="about-us" className="text-decoration-none mx-2">
                  <li ref={this.aboutus} onClick={this.active(this.aboutus)}>
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
                  className="text-decoration-none me-3 position-relative"
                >
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  <div
                    ref={this.searchbox}
                    className="search-box position-absolute p-2 bg-white"
                    id="s"
                  >
                    <input
                      className="w-100 py-2 pe-3"
                      placeholder="search"
                      type="text"
                    />
                    <button className="position-absolute">
                      <FontAwesomeIcon
                        className="fa-arrow-left position-absolute"
                        icon={faArrowLeft}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
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
  activeDrop = (item) => (e) => {
    this.itemsdrop.map((i) => i.current.classList.remove("active-item"));
    item.current.classList.add("active-item");
  };
  toggleActive = () => {
    this.search.current.classList.toggle("active-item");
    if (this.search.current.classList.contains("active-item")) {
      this.searchbox.current.style.animation = "show 0.5s";
      this.searchbox.current.style.visibility = "visible";
    } else {
      this.searchbox.current.style.animation = "hidden 0.5s";
      this.searchbox.current.style.visibility = "hidden";
    }
  };
  toggleDropDown = () => {
    this.dropdownicon.current.classList.toggle("show-dropdown");
    this.dropdownmenu.current.classList.toggle("d-block");
  };
  dropDownDisplay = () => {
    this.dropdownmenu.current.style.display='block'
    this.dropdownicon.current.classList.remove("show-dropdown");
  };
}

export default Header;
