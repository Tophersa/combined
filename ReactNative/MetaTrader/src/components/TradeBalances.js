
import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import Colours from '../data/Colours';



const balance = "11 369.65";
const equity = "11 369.65";
const freeMrgin = "11 369.65";

const TradeBalances = () => {

  return (

    <View style={styles.container}>
        <View style={styles.rows}>
            <Text style={styles.leftText}>Balance:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{balance}</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.leftText}>Equity:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{equity}</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.leftText}>Free margin:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{freeMrgin}</Text>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    //marginTop: 40
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  leftText: {
    color: "#363A3A",
    fontWeight : '700',
    fontSize: 14
  },
  rightText: {
    color: Colours.blue,
    fontWeight : '700',
    fontSize: 14
  },
  dots: {
    color: "#CCD1D1",
    fontWeight : '700',
    fontSize: 14
  },
});

export default TradeBalances;
