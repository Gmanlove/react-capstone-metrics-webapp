import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './current/currentSlice';
import detailReducer from './detail/detailSlice';

const store = configureStore({
  reducer: {
    crypto: cryptosReducer,
    detail: detailReducer,
  },
});

export default store;
