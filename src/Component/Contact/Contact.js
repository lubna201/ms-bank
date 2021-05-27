import React from 'react';
import bg from '../../images/2.jpg';
import ContactMsg from '../ContactMsg/ContactMsg';
import './Contact.css';

const Contact = () => {
    return (
        <section className="container mt-5 pt-5">
            <div className="penguin-top-margin">
                <div className="row g-5">
                    <div>
                    <img src={bg} alt="" style={{width:"100%"}}></img>
                    <ul className="mt-5 pt-5 list">
                       <li><h1>Wear your mask all the time</h1></li> 
                       <li><h1>Maintain social distancing</h1></li>
                       <li><h1>Book your appointment</h1></li>
                       <li><h1>Make sure to leave as soon as your work finished</h1></li>
                       <li><h1>Before coming to bank make sure you do not currently have any symptoms of Covid-19</h1></li>
                       <li><h1>You will be asked to use the hand sanitizer available at the entry of the building</h1></li>
                    </ul>
                    </div>
                    <ContactMsg></ContactMsg>
                </div>
            </div>
        </section>
    );
};

export default Contact;