import style from './Search.module.scss';
import searchIcon from '../../assets/img/searchIcon.png';
import { useState } from 'react';

export const Search = () => {
    const [valueSearch, setValueSearch] = useState('');
    
    const changeSearch = (e) => {
        setValueSearch(e.target.value);
    };
    

    return (
        <div className={style.wrapper}> 
            <input type="text"
                placeholder='Поиск пиццы...'
                className={style.root}  
                value={valueSearch}
                onChange={changeSearch}
            />
            <img src={searchIcon} 
                 alt='search icon' 
                 className={style.icon}
                 onClick={() => setValueSearch('')}
            />
        </div>
    );
};