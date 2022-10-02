import { StyleSheet, Dimensions } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: "100%",
        width: "100%",

    },
    map: {
      width: "100%",
      height: "100%",
      marginBottom: 15,

    },

    textInputContainer: {
        backgroundColor: 'grey',
      },
    textInput: {
        height: 38,
        color: '#5d5d5d',
        fontSize: 16,
      },
    buttonContainer: {
        position:'absolute', 
        bottom: 70,
        alignSelf: 'flex-end',
      },
    buttonText: {
        backgroundColor: Colours.PRIMARY,
        color: Colours.WHITE,
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 15,
        paddingVertical: 15, 
        borderRadius: 30,
        marginHorizontal: 20

      },

  });
  
export default styles;