import './NotFound.scss';

export const NotFound = () => {
    return (
       <div className={'root'}>
        <h1>
            <span>😕</span>
            <br />
            Ничего не найдено
        </h1>
        <p className='description'>
            К сожалени данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    );
};