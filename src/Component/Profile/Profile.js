import React from 'react';
import SL from '../HomePage/ServiceAndLoan/SL';
import './Profile.css';

const Profile = () => {
    return (
        <div className="container mt-5 pt-5">
            <SL></SL>
            <h1 className="text-dark mt-5 text-center fs-1 fw-bold">Click The Service You Want</h1>
            <div class="row g-5 mt-3 pt-3">
                <div class="col-6 col-md-3">
                    <button class="btn btn-info text-white buttonDesign" type="button"><h1>Deposit</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Withdraw</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Check Your Balance</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Transfer Money</h1></button>
                </div>
            </div>
            <h1 className="text-dark mt-5 text-center fs-1 fw-bold">Click The Loan Service You Want</h1>
            <div class="row g-5 mt-3 pt-3">
                <div class="col-6 col-md-3">
                    <button class="btn btn-info text-white buttonDesign" type="button"><h1>Education Loan</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Home Loan</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Business Loan</h1></button>
                </div>
                <div class="col-6 col-md-3">
                    <button class="btn btn-info buttonDesign text-white" type="button"><h1>Auto and boat loans</h1></button>
                </div>
            </div>
        </div>
    );
};

export default Profile;