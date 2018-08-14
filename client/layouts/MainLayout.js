import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainLayout = (props) =>
    <div className='main-layout'>
        {(props.children)}
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/rsvp">Rsvp</Link>
        </li>


    </div>

export default MainLayout;
