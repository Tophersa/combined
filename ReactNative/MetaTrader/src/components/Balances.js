
import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import Colours from '../data/Colours';
import Deposit from './Deposit';



const profit = "14 369.65";
const deposit = "2 000.00";
const withdrew = true;
const withdrawal = "-5 000.00";
const balance = "11 369.65";

const Balances = () => {

  //const withdrew = true;

  return (

    <>
    <View style={styles.container}>
        <View style={styles.rows}>
            <Text style={styles.leftText}>Profit:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{profit}</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.leftText}>Deposit:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{deposit}</Text>
        </View>
        {withdrew?
        <View style={styles.rows}>
            <Text style={styles.leftText}>Withdrawal:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </Text>
            <Text style={styles.rightText}>{withdrawal}</Text>
        </View>
        :null}
        <View style={styles.rows}>
            <Text style={styles.leftText}>Balance:</Text>
            <Text style={styles.dots}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Text>
            <Text style={styles.rightText}>{balance}</Text>
        </View>

    </View>
    <Deposit/>
    </>

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

export default Balances;
