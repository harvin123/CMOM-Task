import React from "react";
import { ScrollView, StyleSheet, Text, View,useWindowDimensions , Linking } from "react-native";
import { numberWithCommas } from "../../utils/utils";
import RenderHtml from 'react-native-render-html';

export const CoinDetails = ({coinData}) => {
    const { width } = useWindowDimensions();
   
    const mapUrls = (homePage) => {
        return homePage?.map((url,index) => {
            return url !== '' ?
                <Text key={index} style={{ color: 'blue' }} onPress={() => { Linking.openURL(url) }}>
                    {url}
                </Text>
                : null;
        })
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Name'}</Text>
            <Text>{coinData?.name ||'--'}</Text>
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Symbol'}</Text>
            <Text>{coinData?.symbol || '--'}</Text>
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Hashing Algorithm'}</Text>
            <Text>{coinData?.hashingAlgo || '--'}</Text>
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Description'}</Text>
                {coinData?.description ? <RenderHtml
                    contentWidth={width}
                    source={{
                        html: coinData?.description
                    }}
                /> : null}
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Market Cap(Euro)'}</Text>
            <Text style={{fontWeight:'700'}}>{'\u20AC'}{numberWithCommas(coinData?.marketCapEuro)|| '--'}</Text>
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Home Page'}</Text>
            {mapUrls(coinData?.homePage)}
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.label}>{'Genesis Date'}</Text>
            <Text>{coinData?.genesisDate || '--'}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal:20,
        paddingVertical:20,
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 0.5
    },
    label: {
    fontWeight: '500',
        fontSize: 14,
    },
    subContainer:{
        paddingBottom:20
    }
});