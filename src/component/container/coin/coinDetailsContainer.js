import React,{useEffect, useState}  from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import { getCoinById } from "../../api/coin";
import { CoinDetails } from "../../presentational/coin/coinDetails";

export const CoinDetailsContainer = () =>{
    const [coinData, setCoinData] = useState({});
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const coinId = route.params.id;

    const loadAndUpdateUI = async () =>{    
        const result = await getCoinById(coinId);
        if(result.status === 200){
            const coinDetails = {
            name: result.data.name,
            symbol: result.data.symbol,
            hashingAlgo: result.data.hashing_algorithm,
            description: result.data.description.en,
            marketCapEuro: result.data.market_data.market_cap.eur,
            homePage: result.data.links.homepage,
            genesisDate: result.data.genesis_date,
            }
            setLoading(false);
            setCoinData({...coinDetails});
        }
        else{
            setLoading(false);
        }
    }
    useEffect(()=>{
    loadAndUpdateUI();
    },[]);

    return(
        <View>
        {loading ? <ActivityIndicator style={{minHeight:100}} animating={loading} size="large" />
        :
        <CoinDetails coinData={coinData} />}
    </View>
    );
};