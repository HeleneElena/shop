
import { useEffect, useState } from 'react';
import { Categories } from './../../components/Categories';
import { Sort } from './../../components/Sort';
import Skeleton from './../../components/Skeleton';
import { PizzaBlock } from './../../components/PizzaBlock';

export const Home = ({ setValue }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
      name: 'популярности', sort: 'rating',
    });

    useEffect(() => {
      setIsLoading(true);

      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = setValue ? `&search=${setValue}` : '';

        fetch(`https://63778c4d5c4777651220e948.mockapi.io/pizzas?${category}&sortBy=${sortType.sort}&order=desc${search}` )
        .then(res => res.json())
        .then(arr => {
            setData(arr);
            setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, setValue]);

    const pizzas = data.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

    return (
       <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
            <Sort sortType={sortType} setSortType={setSortType} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading 
                ? skeletons
                : pizzas
            }
          </div>
          </div>
      </div>
    );
};