import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={'flex items-center justify-between p-5 bg-sky-100'}>
            <div className={'text-3xl font-bold'}>
                Mern Stack
            </div>
            <div className={'font-medium flex text-lg gap-4'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Home</Link>
            </div>
            <div className={'font-medium flex text-lg gap-4 '}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Signup</Link>
            </div>
        </div>
    );
}

export default Navbar;