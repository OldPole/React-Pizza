import { useState, useEffect } from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { getDataApi } from '../utils/getDataApi';

const HomePage = ({ searchValue }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortType, setSortType] = useState({
    title: 'популярности (убыв.)',
    type: '-rating',
  });
  const [pizzas, setPizzas] = useState([]);

  const getResources = async (url) => {
    const res = await getDataApi(url);

    if (res) {
      setPizzas(res);
    } else {
      // Error
    }
  };

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sort = sortType.type.replace('-', '');
    const order = sortType.type.includes('-') ? 'desc' : 'asc';

    getResources(
      `https://68ef6835b06cc802829d446e.mockapi.io/api/pizza?${category}&sortBy=${sort}&order=${order}`,
    );

    window.scrollTo(0, 0);
  }, [activeCategory, sortType]);

  const pizzaList = pizzas
    .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((props) => <PizzaBlock key={props.id} {...props} />);
  const skeletonList = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onChangeCategory={(index) => setActiveCategory(index)}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzas.length ? pizzaList : skeletonList}</div>
    </>
  );
};

export default HomePage;
