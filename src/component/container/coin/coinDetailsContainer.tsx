import React,{useEffect, useState}  from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { getCoinById } from "../../api/coin";
import { CoinDetails } from "../../presentational/coin/coinDetails";
import { Coin, coinDetailsRouterProps } from "../../../types";
import { useAppDispatch } from "../../../redux/reducers/store/store";
import {coinList, fetchCoinsDetails } from "../../../redux/reducers/coinReducer";
import { useSelector } from "react-redux";

export const CoinDetailsContainer = () : JSX.Element => {
    const route = useRoute<coinDetailsRouterProps>();
    const coinId = route.params.id;
    const dispatch = useAppDispatch();
    const {loading, coinDetails } = useSelector(coinList);

   
    useEffect(()=>{
        dispatch(fetchCoinsDetails(coinId))
    },[]);

    return(
        <View>
        {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
        :
        <CoinDetails coinData={coinDetails} />}
    </View>
    );
};