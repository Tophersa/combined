import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colours } from '../../utilities/Colours'
import { windowHeight } from '../../utilities/Dimension'


const FormButton = ({buttonTittle}) => {

    // console.warn(buttonTittle)
    return (
        <TouchableOpacity style={styles.formButtonContainer}>
            <Text style={styles.formButtonText}>{buttonTittle}</Text>
        </TouchableOpacity>
        
    )
}

export default FormButton

const styles = StyleSheet.create({
    formButtonContainer:{
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: Colours.RED,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    formButtonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: Colours.WHITE,
        // fontFamily: 'Lato-Regular',
    },
})