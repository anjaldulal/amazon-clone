import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {
    return (
        <div className="navbar">
            <img className='navbar-logo' src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="amazon-logo" />
            {/* <img className='navbar-logo' src="https://www.pinclipart.com/picdir/middle/358-3584545_rolling-pin-clip-art.png" alt="amazon-logo" /> */}

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
                <div className="navbar-cart">
                    <ShoppingBasketIcon />
                    <span className='navbar-optionLineTwo navbar-basketCount'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;