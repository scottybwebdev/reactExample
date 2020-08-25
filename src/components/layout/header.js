import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#2a363b',
    color: '#99b898',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#99b898',
    textDecoration: 'none'
}

export default Header;