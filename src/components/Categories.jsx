const Categories = ({ activeCategory, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={name}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onChangeCategory(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
