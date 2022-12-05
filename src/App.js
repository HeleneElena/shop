import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import './scss/app.scss';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

export const SearchContext = React.createContext();

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ value, setValue }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
       </SearchContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
