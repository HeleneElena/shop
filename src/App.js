import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';
import * as React from 'react';

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}> 
          <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
