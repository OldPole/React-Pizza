import { Link } from 'react-router-dom';

import cart from '@assets/img/cart.png';
import trash from '@assets/img/trash.png';
import back from '@assets/img/back.png';

const CartPage = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={cart} alt="cart" />
            Корзина
          </h2>
          <div className="cart__clear">
            <img src={trash} alt="trash" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items"></div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {' '}
              Всего пицц: <b>{3} шт.</b>{' '}
            </span>
            <span>
              {' '}
              Сумма заказа: <b>{85} BYN</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <img src={back} alt="back" />
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
