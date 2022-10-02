import React from 'react'
import { View, Text, ImageBackground,TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const Alerts = ({subject, message, date, imageUri, location, createdBy, widthSize, heightSize, alertId}) => {
    
    const navigation = useNavigation();
    
    return (
        <>
        {/* <View style={styles.container}> */}

            <ImageBackground source={{uri: imageUri}} resizeMode="cover" style={[styles.container, {width: widthSize, height: heightSize}]} 
            imageStyle={{borderRadius: 10,

            }}>
                <TouchableOpacity style={styles.alertContainer} onPress={()=> navigation.navigate('Alert', {alertId})}>
                    <>
                    <Text style={styles.alertSubject} numberOfLines={1} >{subject}</Text>
                    <Text style={styles.alertMessage} numberOfLines={2}>{message}</Text>
                    </>
                </TouchableOpacity>
            </ImageBackground>
        {/* </View> */}
        </>
    )
}

export default Alerts
