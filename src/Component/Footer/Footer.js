import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Education Loan" , link: "#"},
        {name: "Home Loan" , link: "#"},
        {name: "Business Loan" , link: "#"},
        {name: "Personal Loan" , link: "#"},
        {name: "Auto and boat loans" , link: "#"}
    ]
    const ourAddress = [
        {name: "Chittagong - 2047 Textile" , link: "//google.com/map"},
        {name: "Chittagong - 2047 Anowara" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Advancing of Loans." , link: "#"},
        {name: "Insurance" , link: "#"},
        {name: "Foreign Currency Exchange." , link: "#"},
        {name: "Consultancy" , link: "#"},
        {name: "Debit & credit cards" , link: "#"},
        {name: "Accepting Deposit" , link: "#"},
        {name: "Checking accounts" , link: "#"}
    ]
    return (
        <footer className="footer-area clear-both mt-5 pt-5">
            <div className="container pt-5">
                <div className="row py-5 d-flex justify-content-center">
                    <FooterCol key={1} menuTitle={"Loans"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h4 className="text-info pb-3">Call now</h4>
                            <button className="btn btn-light">+8801234567789</button>
                            <button className="btn btn-light ms-1">+8801234567789</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-info py-3">
                    <h5>Copyright @{(new Date()).getFullYear()} All Rights Reserved</h5>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;