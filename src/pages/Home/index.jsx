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
    const [activeSort, setActiveSort] = useState(0);

    const sort = `&sortBy=${activeSort.sort}`;

      {/* Database */}
    useEffect(() => {
        if (pizzas) {
            setIsLoading(true);
            fetch(`https://63778c4d5c4777651220e948.mockapi.io/pizzas?page=1&limit=5`)
            .then(response => response.json())
            .then(arr => {
                setPizzas(arr);
                setIsLoading(false);
            });
        } 
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
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
        </>         
    );
};