import React from 'react';
import { StyleSheet, Text,View,} from 'react-native';
//import Colours from '../data/Colours';
import Fontisto from 'react-native-vector-icons/Fontisto'


const Position = ({pair,type,lotsize,openPrice,closePrice,openDate,closeDate,value, winC, typeC}) => {

    let typeColour =""
    if(type =="buy"){
        typeColour = "#007aff";
    }else{
        typeColour = "red";
    }


  return (
    <View style={styles.container}>
        
        <View style={styles.upper}>
            <View style={styles.upperLeft}>
                <Text style={styles.pair}>{pair}</Text>
                <Text style={[styles.lotsize,{color: typeC}]}>{type}{lotsize}</Text>
            </View>
            <View style={styles.upperRight}>
                <Text style={styles.closeDate}>{closeDate}</Text>
            </View>
        </View>
        <View style={styles.lower}>
            <View tyle={styles.lowerLeft}>
                <Text style={styles.price}>{openPrice} <Fontisto name="arrow-right-l" size={12} color="gray"/> {closePrice}</Text>
                {/* <Text>-></Text> */}
                {/* <Text style={styles.price}>{data[0].closePrice}</Text> */}
            </View>
            <View tyle={styles.lowerRight}>
                <Text style={[styles.value, {color: winC}]}>{value}</Text>
            </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    alignItems: 'center'
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
    // fontWeight: "700",
    fontSize: 14,
    fontFamily: "Roboto Condensed Bold",
  },
  lotsize: {
    //color: "blue",
    
    fontSize: 13,
    fontFamily: "Roboto Condensed",
    // fontWeight: "700",
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
    // fontWeight: "700",
    fontSize: 11,
    fontFamily: "Roboto Condensed Bold",
 },
});

export default Position;