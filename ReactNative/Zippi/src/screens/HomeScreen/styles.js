import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

    overallContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    logoImage: {
        height: 100,
        width: 500,
        resizeMode: 'contain',
        paddingBottom: 90
    },
    balanceContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        height: 70,
        width: 280,
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 5
    },
    balanceText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '900'
    },
    balanceR: {
        color: 'red',
        fontSize: 24,
        fontWeight: '900',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderRadius: 5
    },
    balanceAmount: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        fontWeight: '900',


    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowBox: {
        backgroundColor: 'red',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 100,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    icon: {

    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },


  });
  
  export default styles;