import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    textInput: {
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    iconContainer: {
        backgroundColor: 'lightgray',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        fontSize: 20,
    },
    description: {
        fontSize: 20,
    },

  });
  
  export default styles;