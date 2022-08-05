import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp,NavigatorScreenParams } from '@react-navigation/native';


export interface Coin {
    id?: string,
    name?: string,
    symbol?: string,
    image?: string,
    hashing_algorithm?: string,
    description?: {
        en : string
    },
    market_data?: {
    market_cap?: {
        eur?: number
    },
    }
    current_price?: number,
    high_24h?: number,
    low_24h?: number,
    links?: {
    homepage?: string[] | undefined,
    },
    genesisDate?: string
}

export interface ListResponse<T>{
    coins : T[],
    coinDetails: T,
    loading: boolean
}

export type RootStackParamList = {
    nestedStack : NavigatorScreenParams<NestedStackparamsList>,
    CoinList : undefined,
    CoinDetails : { 
        id: string | undefined
    },
};

export type NestedStackparamsList = {
    nestedScreen : {title: string | undefined},
    nestedScreen1 :{ title: string | undefined}
};


export type coinListNaviationProps = NativeStackNavigationProp<RootStackParamList, 'CoinDetails'>;

export type coinDetailsRouterProps = RouteProp<RootStackParamList, 'CoinDetails'>;

export type nestescreenRouterProps = RouteProp<NestedStackparamsList,"nestedScreen">;

export type nestescreen1RouterProps = RouteProp<NestedStackparamsList,"nestedScreen1">;


