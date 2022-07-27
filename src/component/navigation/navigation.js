import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CoinListContainer } from "../container/coin/coinListContainer";
import { CoinDetails } from "../coin/coinDetails";
import { CoinDetailsContainer } from "../container/coin/coinDetailsContainer";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Coin List"  component={CoinListContainer} />
                <Stack.Screen name="Coin Details" component={CoinDetailsContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};