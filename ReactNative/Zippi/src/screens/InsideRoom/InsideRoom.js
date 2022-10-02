import React, { useState } from 'react'
import { View, Text, Pressable, FlatList, Button, Alert, TouchableHighlight } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import players from '../../../assets/data/players';
import { useRoute } from '@react-navigation/native'
// import React, { useState } from "react";

const InsideRoom = () => {
    const [showBox, setShowBox] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();

    const roomName = route.params.roomName;
    const roomValue = route.params.roomValue;
    // console.warn(roomName)

    const showConfirmDialog = (direction) => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to toss " +direction+ "?",
          [ {text: "Yes",onPress: () => {setShowBox(false);},},{text: "No",},]
        );
      };




    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.textHeader}><Text style={{fontWeight: 'bold'}}>{item.username}</Text> is tossing...</Text>
            <View style={styles.rowBox}>
                <Text style={styles.textDes}>Head or Tail?</Text>
                <TouchableHighlight style={styles.guessContainer} onPress={()=> navigation.navigate('GuessingRoom', {userName: item.username, tossed: item.tossed, tossedHead: item.tossedHead, tossedTail: item.tossedTail, roomValue: roomValue})}>
                    <Text style={styles.guessText}>Guess</Text>
                </TouchableHighlight> 
            </View>
        </View>
      );

    return (
        <View style={styles.overallContainer}>
 
        <View style={styles.optionHeader}><Text style={styles.optionHeaderText}>Toss</Text></View>
        
      {showBox && <View style={styles.box}></View>}
        
        <View style={styles.tossContainer}>
            <TouchableHighlight style={styles.tossButtom} onPress={() => showConfirmDialog("head")}>
                <Text style={styles.tossText}>Head</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.tossButtom} onPress={() => showConfirmDialog("tail")}>
                <Text style={styles.tossText}>Tail</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.optionHeader}><Text style={styles.optionHeaderText}>Guess</Text></View>

        <FlatList
                data={players}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default InsideRoom
