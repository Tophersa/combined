import React, {useState} from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colours from '../../utilities/Colours' 

const Helper = () => {

    const [pin, setPin] = React.useState({ latitude : 37.78825 , longitude : -122.4324 })
    const [region, setRegion] = React.useState({ 
        latitude : 37.78825 , longitude : -122.4324 ,
        latitudeDelta: 0.0922, longitudeDelta: 0.0421
    })


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search and drap pin to the location'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922, 
                        longitudeDelta: 0.0421
                    })
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyBjIoMnsXmswmg23N1ABV1qAkeAEr950GA',
                    language: 'en',
                }}
                styles={{container:{flex:1, position: 'absolute', width: '100%', zIndex: 1},
                        listView: {backgroundColor: 'white'}
                }}
                // currentLocation={true}
            />
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}

            >
                <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}}/>
                <Marker
                coordinate={pin}
                draggable
                onDragStart={(e)=>{
                    console.log("Drag start", e.nativeEvent.coordinate)
                }}
                onDragEnd={(e)=>{
                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                }}
                ></Marker>
            
            <Circle center={pin}
                radius= {2500}
                // strokeWidth={1}
                
                strokeColor={"rgba(25,25,112,0.5)"}
                fillColor={'rgba(25,25,112,0.1)'}
            />
            </MapView>
        </View>
    )
}

export default Helper

            {/* <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
            /> */}
            {/* <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyBjIoMnsXmswmg23N1ABV1qAkeAEr950GA',
                    language: 'en',
                }}
            /> */}


        //     <Circle center={{ latitude : 37.78825 , longitude : -122.4324 }}
        //     radius= {2500}
        //     // strokeWidth={1}
        //     strokeColor={"rgba(25,25,112,0.5)"}
        //     fillColor={'rgba(25,25,112,0.1)'}
        // />