import React,{useEffect, useState}  from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getCoinsList } from "../../api/coin";
import { CoinList } from "../../presentational/coin/coinList";

export const CoinListContainer = () =>{
const [coinData, setCoinData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() =>{
    loadAndUpdateUI();
},[]);

const loadAndUpdateUI = async () =>{    
    const result = await getCoinsList();
    if(result.status === 200){
        setLoading(false);
        setCoinData(result.data);
    }
    else{
        setLoading(false);
    }
}

    return (
        <View>
            {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
            :
            <CoinList coinData={coinData} />}
        </View>
    );
};