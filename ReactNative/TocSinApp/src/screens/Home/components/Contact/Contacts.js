import React from 'react'
import { Text, View, TouchableOpacity, Pressable } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './styles'

import call from 'react-native-phone-call'

const handlerCall = (phoneNo) =>{
    const args = {
        number: phoneNo, // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
    call(args).catch(console.error)
}


const Contacts = () => {
    return (
        <View style={styles.container}>
            
        <View style={styles.headerContainer}>
            <Text style={styles.header}> Emergency Contacts </Text>
        </View>

        <View style={styles.allContactContainer}>

            <TouchableOpacity onPress={()=> handlerCall("10177")}>
                <View style={styles.contactContainer}>
                    <MaterialIcons style={styles.icon} name="ambulance" size={40} color="black"/>
                    <Text style={styles.name}>Ambulance</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.number}>10177</Text>
                </View>  
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handlerCall("112")}>
                <View style={styles.contactContainer}>
                    <MaterialIcons style={styles.icon} name="fire-truck" size={40} color="black"/>
                    <Text style={styles.name}>Fire Brigade</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.number}>112</Text>
                </View> 
            </TouchableOpacity>
        </View>

        <View style={styles.bottomContactContainer}>
        <TouchableOpacity onPress={()=> handlerCall("10111")}>
                <View style={styles.policeContactContainer}>
                    <MaterialIcons name="police-badge" size={40} color="white"/>
                    <Text style={styles.name}>Police</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.number}>10111</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Contacts
