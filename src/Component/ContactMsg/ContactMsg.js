import React from 'react';

const ContactMsg = () => {

    return (
        <div className=" pt-5 mt-5">
                        <h1 className="title fs-1 pb-3" style={{ color: "#0dcaf0" }}>Contact MS Bank Team</h1>
                        <form className="contactForm" id="contactForm">

                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control rounded-pill name  ps-5 fs-4 p-3" id="name" placeholder="Write Your Name" name="name"
                                    required />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control rounded-pill email ps-5 fs-4 p-3" id="email" placeholder="Write Your Email"
                                    name="email" required />
                            </div>

                            <div className="mb-3">
                                <textarea className="form-control rounded-pill message fs-4  ps-5 p-3" id="message" placeholder="Write Your Message" name="message"
                                    required></textarea>
                            </div>
                            <button type="submit" className="btn btn-info mt-3 rounded-pill fs-4 text-white fs-4 p-3 submit" onClick="myFunction()">Submit</button>
                        </form>
                    </div>
    );
};

export default ContactMsg;