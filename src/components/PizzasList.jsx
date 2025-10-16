import { useEffect, useState } from 'react';

import PizzaBlock from './PizzaBlock';
import { getDataApi } from '../utils/getDataApi';
import Skeleton from './PizzaBlock/Skeleton';

const PizzasList = () => {
  const [pizzas, setPizzas] = useState([]);

  const getResources = async (url) => {
    const res = await getDataApi(url);
    console.log(res);
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
      {pizzas.length
        ? pizzas.map((props) => <PizzaBlock key={props.id} {...props} />)
        : [...new Array(6)].map(() => <Skeleton />)}
    </div>
  );
};

export default PizzasList;
