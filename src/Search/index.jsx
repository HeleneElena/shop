import style from './Search.module.scss';
import searchIcon from '../assets/img/searchIcon.png';

export const Search = ({ value, setValue }) => {

    const changeValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={style.wrapper}> 
            <input type="text"
                placeholder='Поиск пиццы...'
                className={style.root}  
                value={value}
                onChange={changeValue}
            />
            <img src={searchIcon} 
                 alt='search icon' 
                 onClick={() => setValue('')}
                 className={style.icon}
            />
        </div>
    );
};
