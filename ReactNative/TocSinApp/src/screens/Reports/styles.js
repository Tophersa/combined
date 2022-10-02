import { StyleSheet, Dimensions } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.PRIMARY,
        height: "100%",
        width: "100%",
        flex: 1
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

  });
  
export default styles;