import { useState } from 'react';
import style from './Search.module.scss';
import searchIcon from '../assets/img/searchIcon.png';

export const Search = () => {
    const [valSearch, setValSearch] = useState('');

    const handleChange = (e) => {
        setValSearch(e.target.valSearch);
    };

    return (
        <div className={style.wrapper}> 
            <input type="text"
                placeholder='Поиск пиццы...'
                className={style.root}  
                value={valSearch}
                onChange={handleChange}
            />
            <img src={searchIcon} 
                 alt='search icon' 
                 onClick={() => setValSearch('')}
                 className={style.icon}
            />
        </div>
    );
};
