import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    overallContainer: {
        // alignItems: 'center', 
        justifyContent: 'center',
    },
    container: {
        // alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#D7DBDD',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '400',
        color: '#3E403F',
    },
    rowBox: {
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    textDes: {
        fontSize: 16,
        // fontWeight: '700',
        color: '#3E403F',
    },
    guessContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'gray',
        padding: 2,
        width: 70,
        height: 35,
        borderRadius: 5,
    },
    guessText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },


    optionHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    optionHeaderText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
        textTransform: 'uppercase',
    },
    tossContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    tossButtom: {
        backgroundColor: '#1B1C1B',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    tossText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },

  });
  
  export default styles;