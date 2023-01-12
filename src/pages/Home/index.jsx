import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/Skeleton';
import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { useState, useEffect } from 'react';
import { Pagination } from '../../components/Pagination';

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true); {/* Laden*/}
    const [activeCatigory, setActiveCatigory] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pizzas, setPizzas] = useState([]);

      {/* Database */}
    useEffect(() => {
        if (pizzas) {
        setIsLoading(true);
        fetch('https://63778c4d5c4777651220e948.mockapi.io/pizzas')
        .then(response => response.json())
        .then(arr => setPizzas(arr));
        setIsLoading(false);
        } 
    }, []);


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories  />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                {
                    isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />) : pizzas.map(pizzas => <PizzaBlock key={pizzas.id} {...pizzas} />)
                }
                </div>
                    <Pagination onChangePage={number => setCurrentPage(number)} />
            </div>
        </div>
    );
};