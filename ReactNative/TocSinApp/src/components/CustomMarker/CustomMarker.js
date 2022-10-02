import React, {useState} from 'react'
import { View, Text } from 'react-native'
// import styles from './styles'
import { Marker, Callout } from 'react-native-maps';
import Colours from '../../utilities/Colours' 
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';          
import Ionicons from 'react-native-vector-icons/dist/Ionicons';          

const CustomMarker = (props) => {

    const {coordinate, isSelected, onPress} = props;

    return (
        <Marker
         coordinate={coordinate}
         onPress={onPress}>
            <Ionicons name="alert-circle" size={30} color={isSelected?"red":'#c70039'} />
            <Callout><Text>Alert</Text></Callout>
        </Marker>
    )
}

export default CustomMarker

{/* <Marker
coordinate={{
    latitude: region.latitude, 
    longitude: region.longitude
}}>
   <MaterialIcons name="flash-on" size={35} color={"#e60000"} />
</Marker> */}
