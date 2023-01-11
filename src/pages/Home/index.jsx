import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/Skeleton';
import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { useState } from 'react';
import { Pagination } from '../../components/Pagination';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCatigory, setActiveCatigory] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    


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
                    isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />) : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }
                </div>
                <Pagination onChangePage={number => setCurrentPage(number)} />
            </div>
        </div>
    );
};