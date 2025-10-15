import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const handleActiveCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={name}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => handleActiveCategory(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
