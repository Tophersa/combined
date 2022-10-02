import React from 'react'
import { View, Text, FlatList, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import rooms from '../../../assets/data/rooms'

const ChooseGuessRoom = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableHighlight style={styles.container} onPress={()=> navigation.navigate('InsideRoom', {roomName: item.roomName, roomValue: item.stakeValue})}>
            <>
            <Text style={styles.roomName}>{item.roomName}</Text>
            <View style={styles.rowBox}>
                <Text style={styles.stakeAmountText}>Stake Amount :</Text>
                <View style={styles.amountContainer}> 
                    <Text style={styles.amount}>{item.stakeAmount}</Text>
                </View>
            </View>
            </>
        </TouchableHighlight>
      );

    return (
        <View style={styles.overallContainer}>

            <FlatList
                data={rooms}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default ChooseGuessRoom
