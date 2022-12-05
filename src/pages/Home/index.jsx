import { useContext } from 'react';
import { SearchContext } from './../../App';
import { useEffect, useState } from 'react';
import { Categories } from './../../components/Categories';
import { Sort } from './../../components/Sort';
import Skeleton from './../../components/Skeleton';
import { PizzaBlock } from './../../components/PizzaBlock';

export const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {value, setValue} = useContext(SearchContext);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
      name: 'популярности', sort: 'rating',
    });
    const categorys = `${categoryId > 0 ? `category=${categoryId}` : ''}`;

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://63778c4d5c4777651220e948.mockapi.io/pizzas?${categorys}&sortBy=${sortType.sort}&order=desc` )
        .then(res => res.json())
        .then(arr => {
            setData(arr);
            setIsLoading(false);
        });
    }, [categoryId, sortType]);

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
                ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                : data.map((data) => <PizzaBlock key={data.id} {...data} />)
            }
          </div>
          </div>
      </div>
    );
};