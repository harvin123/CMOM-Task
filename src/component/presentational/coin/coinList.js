import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { numberWithCommas } from "../../utils/utils";
import { useNavigation } from '@react-navigation/native';

export const CoinList = ({ coinData }) => {
    const navigation = useNavigation();

    const handleNavigation = (item) => {
        navigation.navigate('Coin Details', { id: item.id })
    };

    const renderCoinItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>handleNavigation(item)} style={styles.container}>
                <View  style={styles.firstRowContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.label}>{item.symbol}</Text>
                </View>
                <View style={styles.secondRowContainer}>
                    <View>
                        <Text style={styles.label}>{'Current'}</Text>
                        <Text style={{fontWeight:'500'}}>{'\u20AC'}{numberWithCommas(item.current_price)}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'24H High'}</Text>
                        <Text style={{color:'green'}}>{'\u20AC'}{numberWithCommas(item.high_24h)}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'24H Low'}</Text>
                        <Text style={{color:'red'}}>{'\u20AC'}{numberWithCommas(item.low_24h)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );

    };

const coinItemKeyExtractor = (item) => {return item.id};

    return (
        <FlatList
            data={coinData}
            keyExtractor={coinItemKeyExtractor}
            renderItem={renderCoinItem}
        />
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 0.5
    },
    firstRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 30
    },
    secondRowContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
        alignSelf: 'center'
    },
    label: {
        fontWeight: '500',
        fontSize: 14
    }
});