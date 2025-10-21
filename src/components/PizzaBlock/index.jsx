import { useState } from 'react';

import add from '@assets/img/add.png';

const PizzaBlock = ({ imageUrl, price, title, types, sizes }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const pizzasTypes = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeIndex) => (
              <li
                onClick={() => setActiveType(typeIndex)}
                className={typeIndex === activeType || types.length === 1 ? 'active' : ''}
                key={typeIndex}>
                {pizzasTypes[typeIndex]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, sizeIndex) => (
              <li
                onClick={() => setActiveSize(sizeIndex)}
                className={sizeIndex === activeSize ? 'active' : ''}
                key={size}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} BYN</div>
          <button className="button button--outline button--add">
            <img src={add} alt="add" />
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
