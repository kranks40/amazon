import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';


function Header() {
    return (
        <div className='header'>
            <MenuOutlinedIcon className='header__menu'/>
            <img className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'alt=''/>

            <div className="header__search">
                <input className='header__searchInput' type='text' placeholder='Search Amazon'  data-aria-clear-label='Clear search keywords' name='k' autoComplete='off' autoCorrect='off' autoCapitalize='off' dir='auto'/>
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello Oketo</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartOutlinedIcon/>
                    <span className="header__optionTwo header__basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header;
