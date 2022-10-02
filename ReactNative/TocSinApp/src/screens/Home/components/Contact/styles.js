import {StyleSheet } from 'react-native'
import { Colours } from '../../../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,
        marginTop: 10,
    },
    headerContainer: {
        paddingVertical: 10,
        // marginBottom: 10,
        backgroundColor: Colours.RED,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    allContactContainer: {
        flexDirection: 'row',
        // marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    contactContainer: {
        height: 130,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',   
        marginHorizontal: 1,
        marginVertical: 10,
        backgroundColor: Colours.SECONDARY,
        borderRadius: 10,
    },
    policeContactContainer: {
        height: 130,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',   
        marginHorizontal: 1,
        marginVertical: 10,
        backgroundColor: Colours.TAB,
        borderRadius: 10,
    },
    bottomContactContainer: {
        alignItems: 'center',
    },
    icon: {
        color: "#b0daf9",
    },
    name: {
        paddingBottom: 5,
        color: "white",
        fontSize: 16,
    },
    divider: {
        width:80,
        borderBottomColor: '#154360',
        borderBottomWidth: 1
    },
    number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },


  });

export default styles;