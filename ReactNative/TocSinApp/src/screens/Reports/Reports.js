import React, {useState, useEffect, useRef} from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Animated } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colours from '../../utilities/Colours' 
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
import { DATA } from '../../../assets/data';
import AlertCarouseItem from '../../components/AlertCarouselItem/AlertCarouselItem'

navigator.geolocation = require('@react-native-community/geolocation');

const Reports = () => {

    const [selectedPlaceId, setSelectedPlaceId]= useState(null)

    const flastList = useRef()
    const viewConfig = useRef({itemVisiblePercentThreshold: 80})
    const onViewChanged = useRef(({viewableItems})=>{
        if(viewableItems.length>0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })
    const map = useRef()

    const renderItem = ({ item }) => (
        <AlertCarouseItem subject={item.subject} message={item.message} date={item.createdAt} imageUri={item.imageUri} location={item.location} createdBy={item.createdBy} widthSize={250} heightSize={150} alertId={item.id}/>
      );
    const width = useWindowDimensions().width

    useEffect(() => {
        if(!selectedPlaceId || !flastList){
            return;
        }
        const index = DATA.findIndex(myPlaces => myPlaces.id == selectedPlaceId)
        flastList.current.scrollToIndex({index})
     
        const selectedPlace = DATA[index]
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])

    const [pin, setPin] = useState({ latitude : 0 , longitude : 0 })
    const [regionArea, setRegionArea] = useState({ 
        latitude : -28.4793 , longitude : 24.6727 ,
        latitudeDelta: 0.0922, longitudeDelta: 0.0421
    })


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search location'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setRegionArea({
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
                currentLocation={true}
                currentLocationLabel='Current location'
                enableHighAccuracyLocation={true}
            />
            <Animated style={styles.map}
                showsUserLocation={true}
                ref={map}
                provider={PROVIDER_GOOGLE}
                region={regionArea}
                onRegionChange={()=> setRegionArea(regionArea)}
                  >

                  {DATA.map(myPlaces =>
                    <CustomMarker coordinate={myPlaces.coordinate}
                        isSelected={myPlaces.id == selectedPlaceId}
                        onPress={()=> setSelectedPlaceId(myPlaces.id)}
                        key={myPlaces.id}
                    />
                   )}

                {/* {regionArea.latitude!=-28.4793 && regionArea.longitude!=24.6727? */}
                <Marker
                coordinate={{latitude: regionArea.latitude, longitude: regionArea.longitude}}
                draggable
                // pinCMolor="black"
                onDragStart={(e)=>{
                    console.log("Drag start", e.nativeEvent.coordinate)
                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                }}
                onDragEnd={(e)=>{
                    setRegionArea({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitudeDelta: 0.0922, 
                        longitudeDelta: 0.0421
                    })
                }}
                ></Marker>
                {/* :<></>} */}
            
            <Circle center={{latitude: regionArea.latitude, longitude: regionArea.longitude}}
                radius= {2500}
                strokeColor={"rgba(25,25,112,0.5)"}
                fillColor={'rgba(25,25,112,0.1)'}
            />

            </Animated>
            <View style={{position:'absolute', bottom: 100}}>
                {/* <AlertCarouseItem subject={DATA[0].subject} message={DATA[0].message} date={DATA[0].createdAt} imageUri={DATA[0].imageUri} location={DATA[0].location} createdBy={DATA[0].createdBy} widthSize={250} heightSize={150}/> */}
                <FlatList data={DATA} renderItem={renderItem} 
                keyExtractor={item =>item.id}
                ref = {flastList}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                // snapToInterval={width-100}
                // snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default Reports
