import React,{Dispatch, useEffect, useState}  from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getCoinsList } from "../../api/coin";
import { Coin } from "../../../types";
import { CoinList } from "../../presentational/coin/coinList";
import { useDispatch, useSelector } from 'react-redux'
import { coinList, fetchCoinsData } from "../../../redux/reducers/coinReducer";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../redux/reducers/store/store";

export const CoinListContainer = () :JSX.Element =>{
const {coins, loading} = useSelector(coinList);
const dispatch = useAppDispatch();

useEffect(() =>{
   dispatch(fetchCoinsData());
},[]);


    return (
        <View>
            {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
            :
            <CoinList coinData={coins} />}
        </View>
    );
};