import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailedPerfumePage from './pages/DetailedPerfumePage';

import './scss/app.scss'


function App() {
  return (
    <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="perfume/:id" element={<DetailedPerfumePage />} />
    </Routes>
  );
}

export default App;

