import React from 'react';
import ContactMsg from '../../ContactMsg/ContactMsg';
import Header from '../Header/Header';
import SL from '../ServiceAndLoan/SL';

const Home = () => {
    return (
        <div className="container mt-5 pt-5">
            <Header></Header>
            <SL></SL>
            <ContactMsg></ContactMsg>
        </div>
    );
};

export default Home;