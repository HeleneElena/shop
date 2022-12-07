import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import './scss/app.scss';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';


function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">

          <Header value={value} setValue={setValue} />
          <Routes>
            <Route path='/' element={<Home value={value} setValue={() => setValue()} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

      </div>
      
    </div>
  );
}

export default App;
