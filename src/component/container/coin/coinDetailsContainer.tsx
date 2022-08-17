import React,{useEffect}  from "react";
import { ActivityIndicator, View } from "react-native";
import {useRoute } from '@react-navigation/native';
import { CoinDetails } from "../../presentational/coin/coinDetails";
import { coinDetailsRouterProps } from "../../../types";
import { useAppDispatch } from "../../../redux/store/store";
import {selectcoinDetails,fetchCoinsDetailsAction } from "../../../redux/reducers/coinDetailsReducer";
import { useSelector } from "react-redux";

export const CoinDetailsContainer = () : JSX.Element => {
    const route = useRoute<coinDetailsRouterProps>();
    const coinId = route.params.id;
    const dispatch = useAppDispatch(); //use app dispatch here
    const {data, loading } = useSelector(selectcoinDetails);  

   
    useEffect(()=>{
        dispatch(fetchCoinsDetailsAction(coinId)) // via saga
      //  dispatch(fetchCoinsDetailsThunk(coinId)) // via thunk
    },[]);

    return(
        <View>
        {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
        :
        <CoinDetails coinData={data} />}
    </View>
    );
};