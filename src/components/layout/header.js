import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}


const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.5rem',
    textAlign: 'center',
}
export default Header;
