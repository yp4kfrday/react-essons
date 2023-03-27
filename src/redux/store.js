import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import perfume from './slices/perfumeSlice';

const store = configureStore({
  reducer: {
    filter,
    cart,
    perfume,
  },
})


export default store;

