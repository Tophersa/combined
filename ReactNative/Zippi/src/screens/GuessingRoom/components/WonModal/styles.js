import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: 'red' 
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "red",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 20
    },
    overallContainer: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    // textContainer: {
    //   marginBottom: 15,
    //   textAlign: "center"
    // },
    // text: {
    //   marginBottom: 15,
    //   textAlign: "center"
    // },
    // buttomClose: {
    //   marginBottom: 15,
    //   textAlign: "center"
    // },
  });

export default styles;