
import React from 'react';
//import type {Node} from 'react';
import { StyleSheet, View, FlatList, Text, Image, ScrollView} from 'react-native';
import Colours from '../data/Colours';

const deposit = "2 000.00";
const date = "2022.04.11 02:00"


const Deposit = () =>{
    return (

        <View style={styles1.container}>
            <View style={styles1.upper}>
                    <Text style={styles1.pair}>Balance</Text>
                    <Text style={styles1.closeDate}>{date}</Text>
            </View>
            <View style={styles1.lower}>
                    <Text style={[styles1.value, {color: Colours.blue}]}>{deposit}</Text>
            </View>
        </View>
  
    );
  };

  const styles1 = StyleSheet.create({
    container: {
      //marginTop:5,
      padding: 5,
      borderTopColor: "#CCD1D1",
      borderTopWidth: 0.5,
      marginHorizontal: 5
    },
    upper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center'
  
    },
    lower: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    
    },
    upperLeft: {
      display: "flex",
      flexDirection: "row"
    },
    lowerLeft: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    pair: {
      color: "#363A3A",
      fontWeight: "700",
      fontSize: 13
    },
    lotsize: {
      //color: "blue",
      fontWeight: "500",
      fontSize: 13
   },
   closeDate: {
    color: "gray",
    fontWeight: "400",
    fontSize: 10,
    fontFamily: "Roboto Condensed",
   },
   price: {
      color: "gray",
      fontWeight: "700",
      fontSize: 13,
   },
   value: {
      color: "blue",
      fontWeight: "700",
      fontSize: 11,
      alignSelf: "flex-end"
   },
  });

export default Deposit;