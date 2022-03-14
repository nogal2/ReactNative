import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import * as D from '../data'
import Country from "./Country";

export default function Fetch() {
    const[countries, setCountries] = useState<D.ICountry[]>([])
    
    const [error, setError] = useState<Error | null>(null)
    console.log('Fetch')
    useEffect (() => {
        console.log('Fetch useEffet')
        D.getCountries().then(setCountries).catch(setError)
        /* D.getCountries().then(countries => 
            setCountries(countries)).catch((error:Error)) => setError(e)) */
    }, [])

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Fetch</Text>
            {error && <Text>{error.message}</Text>}
            <FlatList data={countries} showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Country country={item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />} />
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, alignItems:'center', backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'},
    separator: {borderBottomColor:Colors.blue50, borderBottomWidth:1}
})