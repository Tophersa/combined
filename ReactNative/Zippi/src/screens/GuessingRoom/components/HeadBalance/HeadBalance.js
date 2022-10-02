import React from 'react'
import { View, Text,Image,ImageBackground } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import myProfile from '../../../../../assets/data/myProfile';
import { myInitialBalance } from '../WonModal/WonLostModal';

const HeadBalance = () => {
    return (
        <View style={styles.balanceContainer}>
            <View style={styles.leftContainer}>
                <Entypo name="wallet" size={35} color="yellow" />
                <Text style={styles.balanceText}>Balance :</Text>
            </View>
            <Text style={styles.balance}>{myInitialBalance}</Text>
        </View>
    )
}

export default HeadBalance
