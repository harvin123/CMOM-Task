
import {put,call, takeLatest }from 'redux-saga/effects';
import { getCoinById } from '../../component/api/coin';
import { Coin, CoinDetailsResponse } from '../../types';
import { setCoinsDetailsAction ,fetchCoinsDetailsAction } from '../reducers/coinDetailsReducer';

//The action Object here will params passed from UI. cool!
function* fetchData(action){
    try{
    const {data} : CoinDetailsResponse<Coin> = yield call (getCoinById,action.payload);
    console.log("saga response",data);
    yield put (setCoinsDetailsAction(data));
    }
    catch(err){
        console.log("err",err)
    }
}


export function* coinDetailsSaga(){
 yield takeLatest(fetchCoinsDetailsAction,fetchData)
};
