
import React, { useState } from 'react';
//import type {Node} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Pressable, Alert} from 'react-native';
import Position from '../components/Position';
import TradeBalances from '../components/TradeBalances';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native'


const Trade = () => {
const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

  return (

      <View style={styles.container}>
        <Modal style = {styles.modalMain} animationIn="slideInLeft" animationOut="slideOutLeft"
         animationOutTiming = {500} backdropTransitionOutTiming = {600} swipeDirection ="up"
        coverScreen = {true} isVisible={modalVisible} backdropOpacity = {0.6}
        onRequestClose={() => {setModalVisible(!modalVisible);}}
        >
            <Pressable style={styles.modal} onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.tbadge} source={require('../../assets/Tbadge.jpg')}/>
            </Pressable>
        </Modal>

        <Pressable  onPress={() => setModalVisible(true)}>
            <Image style={styles.top} source={require('../../assets/TradeT.jpg')}/>
        </Pressable>

        <View style={styles.balances}>
            <TradeBalances/>
        </View>
       
        <Pressable style={styles.bottomP} onPress={()=> navigation.navigate('HistoryScreen')}>
            <Image style={styles.bottom} source={require('../../assets/TradeB.jpg')}/>
        </Pressable> 
        </View>

  );
};

const styles = StyleSheet.create({
    container:{
        height: "100%",
    },
    bottom: {
        width: "100%",
        height: 45,
        position: 'absolute',
        bottom: 0, 
   },
    bottomP: {
        width: "100%",
        position: 'absolute',
        bottom: 0, 
   },
   top: {
    width: "100%",
    height: 45,
    position: 'absolute',
    top: 0,
},
balances:{
    marginTop: 45,
},
modal:{
    // backgroundColor: 'rgba(0,0,0,0.5)'
},
modalMain:{
    margin: 0
    // backgroundColor: 'rgba(0,0,0,0.5)'
},
tbadge:{
    height: "100%",
    width: 320,
    resizeMode: 'contain',
}
});

export default Trade;
