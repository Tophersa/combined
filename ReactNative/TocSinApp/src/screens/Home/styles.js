import { StyleSheet } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.PRIMARY,
        height: "100%",
        width: "100%",
        paddingHorizontal: 10
    },
    alertHeader: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 18,
      color : Colours.WHITE,
    },
    addButton: {
      // justifyContent: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      marginRight: 20,
      alignItems: 'center',
      flex: 1,
      marginBottom: 70,
      alignSelf: 'flex-end',
      marginTop: 5
    },
    addButtonItsSelf: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },

  });
  
export default styles;