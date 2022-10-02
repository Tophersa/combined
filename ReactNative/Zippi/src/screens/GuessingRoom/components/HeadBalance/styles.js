import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
 

    //balance styles


    balanceContainer: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        backgroundColor: 'red',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    balanceText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    balance: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'yellow',
    },

  });
  
  export default styles;