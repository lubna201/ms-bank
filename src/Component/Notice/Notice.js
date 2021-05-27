import React from 'react';

const Notice = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center text-info fw-bold mt-5 pt-5">Notices</h1>
            <div class="d-grid gap-4 mt-5">
                <button class="btn btn-success p-4" type="button"><h3>From 3rd june, Offices open till 3pm.........27/05/2021</h3></button>
                <button class="btn btn-dark p-4" type="button"><h3>Home loan increased by..........26/5/2021</h3></button>
            </div>
            <div class="d-grid gap-4 mt-3">
                <button class="btn btn-info p-4" type="button"><h3>Office hours decreased by half hour..........23/05/2021</h3></button>
                <button class="btn btn-secondary p-4" type="button"><h3>Get education loan and be a part of.........21/05/2021</h3></button>
            </div>
            <div class="d-grid gap-4 mt-3">
                <button class="btn btn-success p-4" type="button"><h3>Home loan is at a very good .........15/05/2021</h3></button>
                <button class="btn btn-dark p-4" type="button"><h3>Make your quarentine days more efficient by......13/05/2021</h3></button>
            </div>
            <div class="d-grid gap-4 mt-3">
                <button class="btn btn-info p-4" type="button"><h3>Get Auto and boat loans in a very .........10/05/2021</h3></button>
                <button class="btn btn-secondary p-4" type="button"><h3>From 1st may, office will remain open..........29/04/2021</h3></button>
            </div>
        </div>
    );
};

export default Notice;