import { StyleSheet } from 'react-native';
import { Colours } from '../../utilities/Colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.PRIMARY,
        height: '100%',
    },
    alertImage: {
        height: 200,
        width: "100%",
        resizeMode:'stretch',
        borderRadius: 5
    },
    dataContainer: {
        margin: 10,
        alignItems: 'flex-end'
    },
    dateText: {
        color: Colours.PRIMARY,
        // backgroundColor: Colours.WHITE,
        backgroundColor: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        fontWeight: '700',
        borderRadius: 4,
        padding: 4,
    },
    subjectContainer: {
        margin: 10,
    },
    subjectContainer: {
        margin: 10,
    },
    subject: {
        color: Colours.LIGHTGRAY,
        fontSize: 25,
        fontWeight: '700',
    },
    locationContainer: {
        display:'flex',
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colours.SECONDARY,
        padding: 5,
        borderRadius: 25
    },
    locationText: {
        color: Colours.WHITE,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10
    },
    messageContainer: {
        margin: 10,
    },
    messageHeaderContainer: {
        // backgroundColor: Colours.WHITE,
        padding: 2,
        borderRadius: 3,
        width: "25%",
    },
    messageHeader: {
        color: Colours.WHITE,
        fontSize: 16,
        fontWeight: '500',
    },
    messageText: {
        color: '#E5E8E8',
        fontSize: 14,
    },
    authorContainer: {
        margin: 10,
        alignItems: 'flex-end'
    },
    authorText: {
        color: Colours.SECONDARY,
        fontSize: 14,
        fontWeight: '700',
        padding: 4,
        fontStyle: 'italic' 
    },
    prioritiesContainer: {
        bottom: 0,
        marginHorizontal: 10,
        paddingBottom: 15,
        paddingTop: 15,
        width: '100%'
    },
    voteContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    voteTypeContainer: {
        alignItems: 'center',
    },
    buttonUpContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        backgroundColor: Colours.RED,
        padding: 10,
        width: 100,
        borderRadius: 10
    },

    buttonDownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        backgroundColor: '#3173E0',
        padding: 10,
        width: 100,
        borderRadius: 10
    },
    votetext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colours.WHITE 
    },
    voteCount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colours.SECONDARY_SUP        
    },
    priorityText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colours.SECONDARY
    },

  });
  
export default styles;