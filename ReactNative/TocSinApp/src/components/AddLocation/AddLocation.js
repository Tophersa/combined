import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Animated  } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import Colours from '../../utilities/Colours'
import { useNavigation } from '@react-navigation/native'
import AddAlert from '../../screens/AddAlert/AddAlert';

import { useSelector, useDispatch} from 'react-redux';
import {setPinAdress, setPinCoordinate} from '../../redux/actions'



const AddLocation = (props) => {
    const navigation = useNavigation();

    const {pinAdress, pinCoordinate} = useSelector(state => state.adressReducer)
    const dispatch = useDispatch()

    // const [pinAdress, setPinAdress] = React.useState("g")
    // const [pinCoordinate, setPinCoordinate] = React.useState(
    //     { latitude : 0 , longitude : 0 }
    //     )

    const [region, setRegion] = React.useState({ 
        latitude : -28.4793 , longitude : 24.6727 ,
        latitudeDelta: 100, longitudeDelta: 100
    })

    // console.warn(pinCoordinate)

    
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
                    dispatch(setPinCoordinate({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                    }))
                    dispatch(setPinAdress(details.formatted_address))
                    // console.warn(details.formatted_address)
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
                currentLocation={true}
                currentLocationLabel='Current location'
                enableHighAccuracyLocation={true}
            />
            <Animated style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={region}
                onRegionChange={()=> setRegion(region)}
                  >

                {pinCoordinate.latitude!=0?<Marker
                coordinate={{latitude: region.latitude, longitude: region.longitude}}
                draggable
                // pinColor="black"
                onDragStart={(e)=>{
                    console.log("Drag start", e.nativeEvent.coordinate)
                }}
                onDragEnd={(e)=>{
                    setRegion({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitudeDelta: 0.0922, 
                        longitudeDelta: 0.0421
                    })
                    dispatch(setPinCoordinate({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    }))
                    // console.warn(e.nativeEvent.coordinate)
                }}
                ></Marker>:<></>}
            
            </Animated>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('AddAlert')}>
                <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
                       
        </View>
        
        
    )
}

export default AddLocation

