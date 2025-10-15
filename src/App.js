import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzasList from './pages/PizzasList';
import { getDataApi } from './utils/getDataApi';

import './scss/app.scss';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzasList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
(async () => {
  console.log(await getDataApi('https://68ef6835b06cc802829d446e.mockapi.io/api/pizza'));
})();
