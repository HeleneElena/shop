import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/Skeleton';
import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { useState, useEffect } from 'react';
import { Pagination } from '../../components/Pagination';

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true); {/* Laden*/}
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pizzas, setPizzas] = useState([]);
    const [sort, setSort] = useState({name: 'популярности', sortProperty: 'rating'});

    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const sortItem = `sortBy=${sort.sortProperty.replace('-', '')}&order=${order}`;
    const categotyItem = categoryId > 0 ? `category=${categoryId}` : '';

      {/* Database */}
    useEffect(() => {
            setIsLoading(true);
            fetch(`https://63778c4d5c4777651220e948.mockapi.io/pizzas?page=1&limit=7&${sortItem}&${categotyItem}`)
            .then(response => response.json())
            .then(arr => {
                setPizzas(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sort]);


    return (
        <>
            <div className="content__top">
                    <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                    <Sort sort={sort} onClickSort={(i) => setSort(i)} />
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