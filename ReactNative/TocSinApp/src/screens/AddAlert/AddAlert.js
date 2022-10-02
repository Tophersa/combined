import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import AddLocation from '../../components/AddLocation/AddLocation'
import { Colours } from '../../utilities/Colours'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch} from 'react-redux';
import {setPinAdress, setPinCoordinate} from '../../redux/actions'



const AddAlert = () => {

    const {pinAdress, pinCoordinate} = useSelector(state => state.adressReducer)
    const dispatch = useDispatch()

    const navigation = useNavigation();
    
    const [subjectText, setSubjectText] = React.useState("");
    const [message, setMessageText] = React.useState("");
    const [showAuthor, setShowAuthor] = React.useState(false);

    const showAuthorHandler = () => setShowAuthor(!showAuthor);
   
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Keep the community</Text>
                <Text style={styles.headerText}>safe and informed</Text>
            </View>
            <Text style={styles.locationLabel}>Location:</Text>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('AddLocation')}>
                    <TextInput style={styles.inputSubject}
                        onChangeText={dispatch(setPinAdress)} value={pinAdress}
                        placeholder="Choose on a map"
                        placeholderTextColor={Colours.SECONDARY_SUP} 
                        multiline={true}
                        editable={false}
                    />
                </TouchableOpacity>
            </View>
 
            <View style={styles.inputContainer}>
                <Text style={styles.locationLabel}>Subject:</Text>
                <TextInput style={styles.inputSubject}
                    onChangeText={setSubjectText} value={subjectText}
                    placeholder="Fill subject or heading"
                    placeholderTextColor={Colours.SECONDARY_SUP} 
                    multiline={true}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.locationLabel}>Message:</Text>
                <TextInput style={styles.inputSubject}
                    onChangeText={setMessageText} value={message}
                    placeholder="Alert body"
                    placeholderTextColor={Colours.SECONDARY_SUP} 
                    multiline={true}
                />
            </View>

            <View style={styles.authorContainer}>
                <TouchableWithoutFeedback onPress={showAuthorHandler}>
                <Text style={styles.authorText}>Add alert anonymously? </Text>
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress={showAuthorHandler}>
                    {showAuthor?<MaterialIcons name="check-box" size={20} color={Colours.WHITE} />:
                    <MaterialIcons name="check-box-outline-blank" size={20} color={Colours.WHITE} />}
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonItSelf}>
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

export default AddAlert
