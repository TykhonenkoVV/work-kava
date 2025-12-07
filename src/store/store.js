import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { cafeReducer } from './cafe/slice';
import { fastFoodReducer } from './fastfood/slice';
import { cartReducer } from './cart/slice';

const authPersistConfig = {
  key: 'wk-auth',
  storage,
  whitelist: ['locale', 'accessToken', 'refreshToken']
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cafe: cafeReducer,
    fastFood: fastFoodReducer,
    cart: cartReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
