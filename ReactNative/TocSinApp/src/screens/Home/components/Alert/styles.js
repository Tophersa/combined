import { StyleSheet } from 'react-native';
import { Colours } from '../../../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 300,
        backgroundColor: Colours.SECONDARY_SUP,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        
    },
    alertContainer: {
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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