import React from 'react';
import './Header.css';
import bg from '../../../images/1.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row container mt-5 g-5 pt-5 d-flex align-items-center">
            <div className="col-md-6">
                <h1 style={{ color: "#0dcaf0" }}>MS Bank</h1>
                <h2 className=" lh-base">Manage your personal finance</h2>
                <div className="d-flex" >
                    <button className="btn btn-info  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/login" style={{textDecoration:"none"}}>Login</Link></button>
                    <button className="btn btn-info  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/contact" style={{textDecoration:"none"}}>Get In Touch</Link></button>
                </div>
            </div>
            <div className="col-md-6 ps-5">
                <img src={bg} alt="" style={{width:"100%"}}></img>
            </div>
        </div>
    );
};

export default Header;