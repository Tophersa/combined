import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colours } from '../../utilities/Colours'
import { windowHeight, windowWidth } from '../../utilities/Dimension'

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
  }) => {
    let bgColor = backgroundColor;
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: bgColor}]}
        {...rest}>
        <View style={styles.iconWrapper}>
          <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
        </View>
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default SocialButton;
  
  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
    },
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    //   fontFamily: 'Lato-Regular',
    },
  });