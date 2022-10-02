import React from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles'
import search from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearch = () => {

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={30}/>
            </View>
            <Text style={styles.description}>{item.description}</Text>
        </View>
        
      );

    const [inputText, setInputText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder='where are you going?'
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList data={search} renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default DestinationSearch
