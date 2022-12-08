import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/Skeleton';
import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';

export const Home = ({searchValue}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCatigory, setActiveCatigory] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [active, setActive] = useState({name: 'популярности', sortProperty: 'rating'});
    
    useEffect(() => {
        setIsLoading(true);
        const order = active.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = active.sortProperty.replace('-', ''); 
        const category = activeCatigory > 0 ? `category=${activeCatigory}` : '';
        const search = searchValue > 0 ? `&search=${searchValue}` : '';

        fetch(`https://635fa0523e8f65f283b7781a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
        )
        .then(res => res.json())
        .then(arr => {
            setItems(arr);
            setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [activeCatigory, active, searchValue, currentPage]);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories activeCatigory={activeCatigory} onClickCategory={(id) => setActiveCatigory(id)} pizzas={items} />
                    <Sort active={active} onChangeSort={(id) => setActive(id)} />
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