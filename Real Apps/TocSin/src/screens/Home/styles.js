import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    image: {
      with: '100%',
      height: 500,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
      fontSize: 80,
      fontWeight: 'bold',
      color: '#fff',
      width: '70%',
      marginLeft: 25,
    },
    buttom: {
      backgroundColor: '#fff', 
      width: 200,
      height: 40,
      borderRadius: 10,
      marginTop: 25,
      marginLeft: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttomText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    searchButtom: {
      backgroundColor: '#fff', 
      width: Dimensions.get('screen').width - 20,
      height: 40,
      borderRadius: 20,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 50,
      zIndex: 100,
    },
    searchButtomText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
    },
  });
  
  export default styles;