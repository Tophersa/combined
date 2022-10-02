import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    overallContainer: {
        // alignItems: 'center',
   
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'red',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
    },
    roomName: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
        alignSelf:'center',
        textTransform: 'uppercase',
    },
    rowBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderTopWidth: 1,
        // borderTopColor: 'white',
        paddingTop: 5
        
    },
    stakeAmountText: {
        fontSize: 18,
        // fontWeight: '700',
        color: 'white',
    },
    amountContainer: {
        backgroundColor: 'yellow',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
  });
  
  export default styles;