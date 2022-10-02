import React, {useState} from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colours from '../../utilities/Colours' 
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const ReportHelper = () => {

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
                }}
                query={{
                    key: 'AIzaSyBjIoMnsXmswmg23N1ABV1qAkeAEr950GA',
                    language: 'en',
                }}
                styles={{container:{flex:1, position: 'absolute', width: '100%', zIndex: 1, marginTop: 20},
                        listView: {backgroundColor: 'white'},
                        textInput:{
                            height: 50,
                            fontSize: 16,
                            marginHorizontal: 5
                        }
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

                <Marker
                    coordinate={{latitude: region.latitude, longitude: region.longitude}}>
                    <MaterialIcons name="flash-on" size={35} color={"#e60000"} />
                </Marker>
            
            </MapView>
        </View>
    )
}

export default ReportHelper

