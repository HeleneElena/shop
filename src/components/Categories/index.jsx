

export const Categories = ({ categoryId, setCategoryId }) => {
    const LIST = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    
    return (
       <div className="categories">
            <ul>
                {
                    LIST.map((el, i) => {
                        return <li key={i} 
                                   className={categoryId === i ? "active" : ''}
                                   onClick={() => setCategoryId(i)}
                               >{el}</li>
                    })
                }
            </ul>
        </div>
    );
};