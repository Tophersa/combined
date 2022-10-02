import { StyleSheet } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 300,
        backgroundColor: Colours.SECONDARY_SUP,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,

        // elevation: 24,
        
    },
    alertContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-end',
        flex: 1,
    },
    alertSubject: {
        fontSize: 25,
        fontWeight: '500',
        color: Colours.WHITE,
    },
    alertMessage: {
        fontSize: 18,
        fontWeight: '500',
        color: Colours.WHITE,
    },
    image: {
    },

  });
  
export default styles;