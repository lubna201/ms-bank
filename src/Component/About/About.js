import React from 'react';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className="container mt-5 pt-5">
            <img src={about} alt="" style={{ width: "100%" }}></img>
            <h1 className="text-center text-info fw-bold mt-5 pt-5">About Us</h1>
            <h3 className="mt-5 mb-5" style={{letterSpacing:"2px", lineHeight:"1.8", textAlign: "justify"}}> We are committed to serving our millions of retail, business, wealth management, payment, commercial and corporate, and investment services customers across the country and around the world as a trusted financial partner. Our 700 employees work across departments to help our millions of retail, business, wealth management, payment, commercial and corporate, and investment services customers across the country and around the world turn their dreams into reality. We take ownership of projects and initiatives and innovate to provide the best results.We pride ourselves on diligently and ethically upholding Bangladeshi Bank’s best-in-class financial record and legacy of more than 50 years in banking.Most importantly, we put people first, cultivating and treasuring meaningful relationships with the customers we serve, the colleagues we support and the communities where we live and work.</h3>
        </div>
    );
};

export default About;