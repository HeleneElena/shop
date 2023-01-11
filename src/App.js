import './scss/app.scss';
import * as React from 'react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import { useState } from 'react';
import Skeleton from './components/Skeleton';
import pizzas from './assets/data.json';
import { useEffect } from 'react';

const App = () => {
  {/* Laden*/}
  const [isLoader, setIsLoader] = useState(false);  
  const [pizzas, setPizzas] = useState([]);

  {/* Database */}
  useEffect(() => {
    if (pizzas) {
      setIsLoader(false);
       fetch('https://63778c4d5c4777651220e948.mockapi.io/pizzas')
      .then(response => response.json())
      .then(arr => setPizzas(arr));
      setIsLoader(true);
    } 
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoader ? pizzas.map(pizzas => <PizzaBlock key={pizzas.id} {...pizzas} />)
              :  [...new Array(5)].map((_, index) => <Skeleton key={index} />)
              
            }
          </div>
        </div>
      </div>
    </div>
      </div>

  );
}

export default App;
