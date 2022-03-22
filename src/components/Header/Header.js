import React from 'react';
import image from '../../images/banner3.png'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>

<img className='image' src={image} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order  Review</a>
                <a href="/Manage">Manage Inventory</a>
             </nav>
          
        </div>
    );
};

export default Header;