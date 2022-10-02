import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'

const Players = (props) => {
    return (
        <View style={styles.playersContainer}>
            <View style={styles.youContainer}>
                <Image source={require('../../../../../assets/images/pp1.jpg')} style={styles.yourImage}/>
                <Text style={styles.youText}>You</Text>
            </View>
            <View style={styles.otherContainer}>
                <Image source={require('../../../../../assets/images/pp2.jpg')} style={styles.otherImage}/>
                <Text style={styles.otherText}>{props.userName}</Text>
            </View>
        </View>
    )
}

export default Players
