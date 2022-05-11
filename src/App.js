import React, { Component } from 'react';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/main-page';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Articles from './components/articles';
import Recruitment from './components/recruitment';
import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
class App extends Component {
    state = {}
    render() {
        return (
            <>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="services" element={<Services />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="articles" element={<Articles />} />
                        <Route path="recruiment" element={<Recruitment />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="contact-us" element={<ContactUs />} />
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;