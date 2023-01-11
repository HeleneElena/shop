import { useState } from 'react';

export const Categories = () => {
    const LIST = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const [active, setActive] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    LIST.map((el, index) => {
                        return <li key={index} 
                                    className={active === index ? "active" : ''}
                                    onClick={() => setActive(index)}
                                >{el}</li>
                    })
                }
                
            </ul>
        </div>
    )
};