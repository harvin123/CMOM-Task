import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CoinListContainer } from "../container/coin/coinListContainer";
import { CoinDetailsContainer } from "../container/coin/coinDetailsContainer";
import { NestedStackparamsList, RootStackParamList } from '../../types';
import { NestedScreen } from "../container/nestedScreen";
import { NestedScreen1 } from "../container/coin/nestedScreen1";
import { Image } from "react-native";
import { Provider } from "react-redux";
import store from "../../redux/reducers/store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NestedStack  = createNativeStackNavigator<NestedStackparamsList>();

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={{}}
      />
    );
  }
const DetailsScreen = () => {
return (
<Stack.Navigator screenOptions={{headerTitle:(props) => <LogoTitle />}}>
<NestedStack.Screen name="nestedScreen" options={{headerShown: false}} component={NestedScreen}/>
<NestedStack.Screen name="nestedScreen1"options={{headerShown: false}}  component={NestedScreen1}/>
</Stack.Navigator>
);
}
export const Navigation = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
           headerStyle: {
           backgroundColor: '#f4511e',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
                <Stack.Screen name="CoinList"  component={CoinListContainer} />
                <Stack.Screen name="CoinDetails" component={CoinDetailsContainer} />
                <Stack.Screen name="nestedStack"  component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
};