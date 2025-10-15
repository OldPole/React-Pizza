import { useEffect, useState } from 'react';

import PizzaBlock from '../components/PizzaBlock';
import { getDataApi } from '../utils/getDataApi';

const PizzasList = () => {
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
    getResources('https://68ef6835b06cc802829d446e.mockapi.io/api/pizza');
  }, []);

  return (
    <div className="content__items">
      {pizzas &&
        pizzas.map(({ id, imageUrl, price, title }) => (
          <PizzaBlock id={id} imageUrl={imageUrl} price={price} title={title} />
        ))}
    </div>
  );
};

export default PizzasList;
