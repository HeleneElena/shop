
export const Categories = ({ categoryId, onClickCategory }) => {
    const LIST = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {
                    LIST.map((el, index) => {
                        return <li key={index} 
                                    className={categoryId === index ? "active" : ''}
                                    onClick={() => onClickCategory(index)}
                                >{el}</li>
                    })
                }
                
            </ul>
        </div>
    )
};