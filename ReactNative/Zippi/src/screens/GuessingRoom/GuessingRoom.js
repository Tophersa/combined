// import React from 'react'
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import HeadBalance from './components/HeadBalance/HeadBalance'
import HeadOrTail from './components/HeadOrTail/HeadOrTail'
import StakeAmount from './components/StakeAmount/StakeAmount'
import Players from './components/Players/Players'
import styles from './styles'
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import WonLostModal from './components/WonModal/WonLostModal'
// const [modalVisible, setModalVisible] = useState(false);
import { useRoute } from '@react-navigation/native'


const GuessingRoom = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const route = useRoute();

    const userName = route.params.userName;
    const tossedHead = route.params.tossedHead;
    const tossedTail = route.params.tossedTail;
    const roomValue = route.params.roomValue;
    // console.warn(userName)

    return (
        <View style={styles.container}>
            <HeadBalance/>
            <HeadOrTail tossedTail={tossedTail} tossedHead={tossedHead} roomValue={roomValue}/>
            <StakeAmount roomValue={roomValue}/>
            <Players userName={userName}/>

   
        </View>
    )
}


export default GuessingRoom

