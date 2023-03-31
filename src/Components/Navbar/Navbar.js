import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img className='navbar-logo' src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="amazon-logo" />
            </Link>

            <div className="navbar-search">
                <input type="text" className='navbar-searchbar' /><SearchIcon className='navbar-searchIcon' />
            </div>

            <div className="navbar-nav">
                <div className="navbar-option">
                    <span className='navbar-optionLineOne'>Hello, Sign in</span>
                    <span className='navbar-optionLineTwo'>Account & Lists</span>
                </div>
                <div className="navbar-option">
                    <span className='navbar-optionLineOne'>Returns</span>
                    <span className='navbar-optionLineTwo'>& Orders</span>
                </div>
                <div className="navbar-option">
                    <span className='navbar-optionLineOne'>Your</span>
                    <span className='navbar-optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="navbar-cart">
                        <ShoppingBasketIcon />
                        <span className='navbar-optionLineTwo navbar-basketCount'>0</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;