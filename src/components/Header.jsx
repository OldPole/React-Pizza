import { Link } from 'react-router-dom';

import Search from './Search';

import logo from '@assets/img/logo.png';
import cart from '@assets/img/cart.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to={'/'}>
          <div className="header__logo">
            <img width="38" height="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to={'cart'} className="button button--cart">
            <span>85 BYN</span>
            <div className="button__delimiter"></div>
            <img src={cart} alt="cart" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
