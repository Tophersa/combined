import React from 'react'
import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import { Colours } from '../../utilities/Colours'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/core'
import { DATA } from '../../../assets/data'

const uriImage = 'hh'

const Alert = () => {

    const route = useRoute();

    const alert = DATA.find(post=> post.id === route.params.alertId)
    // console.warn(alert)

    // console.warn(route.params)

    return (
        <View style={styles.container}>

        <ScrollView> 
            <Image style={styles.alertImage} source={{uri: alert.imageUri}}/>

            <View style={styles.dataContainer}>
                <Text style={styles.dateText}>{alert.createdAt}</Text>
            </View>

            <View style={styles.subjectContainer}>
                <Text style={styles.subject}>{alert.subject}</Text>
            </View>

            <View style={styles.locationContainer}>
                <View style={styles.iconContainer}>
                <Ionicons name="location-sharp" size={25} color={Colours.WHITE} />
                </View>
                <Text style={styles.locationText}>{alert.location}</Text>
            </View>

            <View style={styles.messageContainer}>
                <View style={styles.messageHeaderContainer}>
                    <Text style={styles.messageHeader}>Infomartion</Text>
                </View>
                <Text style={styles.messageText}>{alert.message}</Text> 
            </View>

            <View style={styles.authorContainer}>
                <Text style={styles.authorText}>{alert.shareAnonymously?"anonymous":alert.createdBy}</Text>
            </View>

        </ScrollView>


            <View style={styles.prioritiesContainer}>
                <View style={styles.voteContainer}>
                    <View style={styles.voteTypeContainer}>
                        <TouchableOpacity style={styles.buttonUpContainer}>
                            <>
                            <AntDesign name="like1" size={16} color={Colours.WHITE} />
                            <Text style={styles.votetext}>HIGH</Text>
                            </>
                        </TouchableOpacity>
                        <Text style={styles.voteCount}>154</Text>
                    </View>

                    <View style={styles.voteTypeContainer}>
                        <TouchableOpacity style={styles.buttonDownContainer}>
                            <>
                            <AntDesign name="dislike1" size={16} color={Colours.WHITE} />
                            <Text style={styles.votetext}>LOW</Text>
                            </>
                        </TouchableOpacity>
                        <Text style={styles.voteCount}>2</Text>
                    </View>

                </View>
                <Text style={styles.priorityText}>Priority</Text>
            </View>

        </View>
    )
}

export default Alert
