import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '@redux/slices/filterSlice';

import sortUp from '@assets/img/sort-up.png';

export const types = [
  { title: 'популярности (убыв.)', type: '-rating' },
  { title: 'популярности (возр.)', type: 'rating' },
  { title: 'цене (убыв.)', type: '-price' },
  { title: 'цене (возр.)', type: 'price' },
  { title: 'алфавиту (убыв.)', type: '-title' },
  { title: 'алфавиту (возр.)', type: 'title' },
];

const Sort = () => {
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

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
