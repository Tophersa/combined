import React from 'react'
import { View, Text,  FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Contacts from './components/Contact/Contacts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colours } from '../../utilities/Colours'
import Alerts from './components/Alert/Alert'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import { useNavigation } from '@react-navigation/native'

import { DATA } from '../../../assets/data'

const Home = () => {
    const width = useWindowDimensions().width
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Alerts subject={item.subject} message={item.message} date={item.createdAt} imageUri={item.imageUri} location={item.location} createdBy={item.createdBy} widthSize={width-100} heightSize={150} alertId={item.id}/>
      );


    return (
        <View style={styles.container}>

            <Contacts/>

            <View style={styles.alertHeader}>
                <Text style={styles.headerText}>Latest Alerts</Text>
                <AntDesign name="right" size={16} color={Colours.WHITE} />    
            </View>
            <View style={styles.alertContainer}>
                <FlatList data={DATA} renderItem={renderItem} horizontal={true}
                snapToInterval={width-100}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('AddAlert')}>
                <MaterialIcons style={styles.addButtonItsSelf} name="add-circle" size={60} color={Colours.WHITE} />
            </TouchableOpacity>
            
        </View>
    )
}

export default Home
