import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    overallContainer: {
        height: '100%',
        justifyContent: 'space-between',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headContainer: {
        width: 150,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
    },
    tailContainer: {
        width: 150,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    headImage: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
 
    },
    tailImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
 
    },
    headText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
 
    },
    tailText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    orText: {
        position: 'absolute',
        zIndex: 100,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 15,
        borderWidth: 2,
        borderColor: 'black',
        color: 'white',
    },
    image: {
        width: 300,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',

    },
  });
  
  export default styles;