import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import coinReducer from '../reducers/coinReducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga/rootsaga';
import coinDetailsReducer from '../reducers/coinDetailsReducer';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    coins: coinReducer,
    coindetails: coinDetailsReducer
  },
  middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
