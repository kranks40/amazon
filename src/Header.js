import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    const   [{basket}, dispatch] = useStateValue();


    return (
        <div className='header'>
            <MenuOutlinedIcon className='header__menu'/>

            <Link to='/'>
                <img className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png ' alt=''/>
            </Link>
            

            <div className="header__search">
                <input className='header__searchInput' type='text' placeholder='Search Amazon'  data-aria-clear-label='Clear search keywords' name='k' autoComplete='off' autoCorrect='off' autoCapitalize='off' dir='auto'/>
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className="header__nav">
            <Link to='login'>
                <div className="header__option">
                    <span className="header__optionOne">Hello Oketo</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
            </Link>

                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingCartOutlinedIcon/>
                     <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
               
                

            </div>
        </div>
    )
}

export default Header;
