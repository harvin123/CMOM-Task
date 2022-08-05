
import {all, put,call, takeLatest }from 'redux-saga/effects';
import { getCoinsList } from '../../component/api/coin';
import { Coin, CoinListResponse } from '../../types';
import { fetchCoinsAction, setCoinsDataAction } from '../reducers/coinReducer';


function* fetchData(){
    try{
    const {data} : CoinListResponse<Coin> = yield call (getCoinsList);
    yield put (setCoinsDataAction(data));
    }
    catch(err){
        console.log("err",err)
    }
}

export function* coinSaga(){
 yield takeLatest(fetchCoinsAction,fetchData)
};
