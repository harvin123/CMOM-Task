import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import coinReducer from '../coinReducer';
const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
