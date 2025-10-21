import { useState } from 'react';
import { useDispatch } from 'react-redux';

import sortUp from '@assets/img/sort-up.png';

const Sort = ({ sortType, setSortType }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const types = [
    { title: 'популярности (убыв.)', type: '-rating' },
    { title: 'популярности (возр.)', type: 'rating' },
    { title: 'цене (убыв.)', type: '-price' },
    { title: 'цене (возр.)', type: 'price' },
    { title: 'алфавиту (убыв.)', type: '-title' },
    { title: 'алфавиту (возр.)', type: 'title' },
  ];

  const handleSortType = (type) => {
    dispatch(setSortType(type));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={sortUp} alt="sort-up" />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortType.title}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {types.map((type) => (
              <li
                onClick={() => handleSortType(type)}
                className={sortType.title === type.title ? 'active' : ''}
                key={type.title}>
                {type.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
