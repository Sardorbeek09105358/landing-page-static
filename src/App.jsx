import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Favourites } from './pages/Favourites';
import { Order } from './pages/Order';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
