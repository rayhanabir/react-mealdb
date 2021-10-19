import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
           <div className="menu-bar">
           <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/item">Item</a>
                <a href="cheif">Chief</a>
                <a href="/Popular">Popular Item</a>
                <a href="/chinese">Chinese Item</a>
                <a href="korean">Korean Item</a>
                <a href="/drinks">Soft Drinks</a>
            </nav>
           </div>

        </>
    );
};

export default Header;