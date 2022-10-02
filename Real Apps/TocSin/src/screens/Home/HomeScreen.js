import React from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.image}>
                <Pressable style={styles.searchButtom} onPress={()=> console.warn('Search Btn clicked')}>
                    <Fontisto name="search" size={20} color="red" />
                    <Text style={styles.searchButtomText}>Where are you going?</Text>
                </Pressable>
                
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.buttom} onPress={()=> console.warn('Btn clicked')}>
                    <Text style={styles.buttomText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen
