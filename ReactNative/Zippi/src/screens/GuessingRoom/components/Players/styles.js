import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({

    //players styles
    playersContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#2A2A2A',
        bottom: 0,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center'
    },
    youContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        height: 100,
        borderTopLeftRadius: 10,
        paddingHorizontal: 10
    },

    otherContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        height: 100,
        borderTopRightRadius: 10,
        paddingHorizontal: 10
    },
    yourImage: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'white',
        alignSelf: 'flex-start'

    },
    youText: {
        paddingTop: 2,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    otherImage: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'white',
        alignSelf: 'flex-end'

    },
    otherText: {
        paddingTop: 2,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-end'
    },

  });
  
  export default styles;