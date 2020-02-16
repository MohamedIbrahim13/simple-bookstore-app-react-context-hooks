import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books}=useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Hello Readers</h1>
            <p>We currently have {books.length} books to read...</p>
        </div>
    )
}

export default Navbar
