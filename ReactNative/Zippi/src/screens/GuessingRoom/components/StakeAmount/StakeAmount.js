import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const StakeAmount = (props) => {

    const roomValue = props.roomValue;

    return (
        <View style={styles.stakeContainer}>
            <Text style={styles.stakeText}>Stake Amount</Text>
            <View style={styles.stakeAmountContainer}>
                <FontAwesome5 name={'money-bill-alt'} size={35} solid color="#145A32"/>   
                <Text style={styles.amount}>R{roomValue}</Text>
            </View>
        </View>
    )
}

export default StakeAmount
