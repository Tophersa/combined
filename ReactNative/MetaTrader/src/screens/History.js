
import React, {useState} from 'react';
//import type {Node} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Pressable} from 'react-native';
import Position from '../components/Position';
import Balances from '../components/Balances';
import DATA from '../data/DATA';
import DATA2 from '../data/DATA2';
import Colours from '../data/Colours';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native'
const Himage = require('../../assets/HWeek.jpg');



const History = () => {

  const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Position pair={item.pair} type={item.type}
        lotsize={item.lotsize}  openPrice={item.openPrice}
        closePrice={item.closePrice} openDate={item.openDate}
        closeDate={item.closeDate} value={item.value}
        typeC={item.typeC} winC={item.winC}
        />
      );

      const [modalVisible, setModalVisible] = useState(false);
  return (

      <View>
            <Modal style = {styles.modalMain} animationIn="slideInLeft" animationOut="slideOutLeft"
              animationOutTiming = {500} backdropTransitionOutTiming = {600} swipeDirection ="up"
              coverScreen = {true} isVisible={modalVisible} backdropOpacity = {0.6}
              onRequestClose={() => {setModalVisible(!modalVisible);}}
            >
              <Pressable style={styles.modal} onPress={() => setModalVisible(!modalVisible)}>
                  <Image style={styles.tbadge} source={require('../../assets/Hbadge.jpg')}/>
              </Pressable>
            </Modal>

            <Pressable onPress={() => setModalVisible(true)}>
              <Image style={styles.top}  source={Himage}/>
            </Pressable>

          <View style={styles.list}>
              <FlatList data={DATA2} renderItem={renderItem} keyExtractor={item => item.id}
                ListHeaderComponent={<Balances/>}
              />
          </View>
        
          <Pressable onPress={()=> navigation.navigate('TradeScreen')}>
            <Image style={styles.bottom} source={require('../../assets/Bottom.jpg')}/>
          </Pressable> 
      </View>

  );
};

const styles = StyleSheet.create({
    bottom: {
        width: "100%",
        height: 45,
        position: 'absolute',
        bottom: 0,    
   },
   top: {
    width: "100%",
    height: 45,
    position: 'absolute',
    top: 0,
  },
  list:{
      marginTop: 45,
      marginBottom: 45
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

const styles1 = StyleSheet.create({
    container: {
      //marginTop:5,
      padding: 5,
      borderTopColor: "#CCD1D1",
      borderTopWidth: 0.5,
      marginHorizontal: 5
    },
    upper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center'
  
    },
    lower: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    
    },
    upperLeft: {
      display: "flex",
      flexDirection: "row"
    },
    lowerLeft: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    pair: {
      color: "#363A3A",
      fontWeight: "700",
      fontSize: 13
    },
    lotsize: {
      //color: "blue",
      fontWeight: "500",
      fontSize: 13
   },
   closeDate: {
      color: "gray",
      fontWeight: "400",
      fontSize: 10
   },
   price: {
      color: "gray",
      fontWeight: "700",
      fontSize: 13,
   },
   value: {
      color: "blue",
      fontWeight: "700",
      fontSize: 11,
      alignSelf: "flex-end"
   },
  });

export default History;
