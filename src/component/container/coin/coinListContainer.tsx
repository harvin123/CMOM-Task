import React,{useEffect}  from "react";
import { View, ActivityIndicator } from "react-native";
import { getCoinsList } from "../../api/coin";
import { Coin } from "../../../types";
import { CoinList } from "../../presentational/coin/coinList";
import {useSelector } from 'react-redux'
import { selectCoinList, fetchCoinsDataThunk,fetchCoinsAction } from "../../../redux/reducers/coinReducer";
import { useAppDispatch } from "../../../redux/store/store";

export const CoinListContainer = () :JSX.Element =>{
const dispatch = useAppDispatch();
const {data, loading} = useSelector(selectCoinList);

useEffect(() =>{
   dispatch(fetchCoinsAction());  // dispatch via saga
  // dispatch(fetchCoinsDataThunk()); //dispatch by thunk
},[]);


    return (
        <View>
            {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
            :
            <CoinList coinData={data} />}
        </View>
    );
};