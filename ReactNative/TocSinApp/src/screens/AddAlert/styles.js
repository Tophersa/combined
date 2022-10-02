import { StyleSheet, Dimensions } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.PRIMARY,
        height: "100%",
        width: "100%",
        // flex: 1,
        padding: 10
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 5,
        paddingBottom: 5
    },
    headerText: {
        color: Colours.WHITE,
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationLabel: {
        color: Colours.LIGHTGRAY,
        fontSize: 17,
        fontWeight: '600'   
    },
    locationContainer:{
        marginBottom: 35,
    },
    inputSubject: {
        backgroundColor: Colours.SECONDARY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        color: Colours.WHITE,
        fontSize: 16,
    },
    inputContainer: {
        marginVertical: 10
    },
    authorContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    authorText: {
        color: Colours.LIGHTGRAY,
        fontSize: 14,
        fontWeight: '600',
        marginRight: 10
    },
    buttonContainer: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Colours.RED
    },
    buttonItSelf: {
        backgroundColor: Colours.RED,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonText: {
        color: Colours.WHITE,
        fontSize: 18,
        fontWeight: '700'   
    }
  });
  
export default styles;