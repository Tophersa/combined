import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

    stakeContainer: {
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        width: 200,
        alignSelf: 'center'
    },

    stakeText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    stakeAmountContainer: {
        // backgroundColor: 'rgba(255, 255, 0, 0.6)',
        backgroundColor: '#909497',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        width: '100%'
    },
    amount: {
        paddingHorizontal: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

  });
  
  export default styles;