import React from 'react';
import el from '../../../images/education.jpg';
import hl from '../../../images/home.jpg';
import cb from '../../../images/balance.jpg';
import tb from '../../../images/transfer.jpg';
import './Sl.css';

const SL = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-dark mt-5 text-center fs-1 fw-bold">Some Services And Loans</h1>
            <div class="row d-flex g-5 mt-3 pt-3">
                <div class=" col-md-6">
                    <div class="card" style={{width: "100%", height:"100%"}}>
                        <img src={el} class="card-img-top img-design" alt="..."/>
                            <div class="card-body">
                                <h2 class="card-title fw-bold text-info">Education Loan</h2>
                                <h5 class="card-text">Education Loan may be availed by any student of Bangladeshi National with excellent educational track record to provide financial assistance for further educational purposes like study in abroad or within the country..</h5>
                                <a href="#" class="btn btn-info text-white fs-4 fw-bold">Click Here</a>
                            </div>
                    </div>
                </div>
                <div class=" col-md-6">
                    <div class="card" style={{width: "100%", height:"100%"}}>
                        <img src={cb} class="card-img-top img-design" alt="..."/>
                            <div class="card-body">
                                <h2 class="card-title fw-bold text-info">Check Your Balance</h2>
                                <h5 class="card-text">Check your balance, how much money do you have, how much you deposited, withdrew amount.</h5>
                                <a href="#" class="btn btn-info text-white fs-4 fw-bold">Click Here</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row g-5 mt-3 pt-3">
                <div class=" col-md-6">
                    <div class="card" style={{width: "100%", height:"100%"}}>
                        <img src={tb} class="card-img-top img-design" alt="..."/>
                            <div class="card-body">
                                <h2 class="card-title fw-bold text-info">Money Transfer</h2>
                                <h5 class="card-text">Transfer money from one account to another safely. Now from home by online banking. Be safe. Be at home</h5>
                                <a href="#" class="btn btn-info text-white fs-4 fw-bold">Click Here</a>
                            </div>
                    </div>
                </div>
                <div class=" col-md-6">
                    <div class="card" style={{width: "100%", height:"100%"}}>
                        <img src={hl} class="card-img-top img-design" alt="..."/>
                            <div class="card-body">
                                <h2 class="card-title fw-bold text-info">Home Loan</h2>
                                <h5 class="card-text">Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. MS Home Loan gives you the confidence to purchase your own space and live in full freedom.</h5>
                                <a href="#" class="btn btn-info text-white fs-4 fw-bold">Click Here</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SL;