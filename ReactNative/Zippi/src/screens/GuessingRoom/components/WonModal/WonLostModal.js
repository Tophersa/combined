import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import myProfile from '../../../../../assets/data/myProfile';

const endResult = true;
// let myInitialBalance = 100

const WonLostModal = (props) => {
    // const headGuess = false;
    const playerBtossedHead = props.playerBtossedHead;
    const playerBtossedTail = props.playerBtossedTail;
    const iGuessedHead = props.iGuessedHead;
    const iGuessedTail = props.iGuessedTail;
    const roomValue = props.roomValue;

    // console.warn(roomValue)

    // const navigation = useNavigation(headGuess);

    function headHandler() {
            if (playerBtossedHead && iGuessedHead){
                myInitialBalance = myInitialBalance + roomValue
                // console.warn(myInitialBalance)
                return <WonModal/>
            }else{
                myInitialBalance = myInitialBalance - roomValue
                return <LostModal/>
            }
        }
    function tailHandler() {
            if (playerBtossedTail && iGuessedTail){
                myInitialBalance = myInitialBalance + roomValue
                return <WonModal/>
            }else{
                myInitialBalance = myInitialBalance - roomValue
                return <LostModal/>
            }
        }


    return (
        <>
        {iGuessedHead?headHandler():tailHandler()}
        {/* {playerBtossedHead && coinGuess?<WonModal/>:<LostModal/>} */}
        {/* {playerBtossedTail && iGuessedTail?<WonModal/>:<LostModal/>} */}
        {/* {endResult?<WonModal/>:<LostModal/>} */}
        </>
    )
}
const WonModal = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.overallContainer}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Ionicons name={'happy'} size={40} solid color="#145A32"/>
                <Text style={styles.modalText}>Congratulations you won...</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={()=> navigation.navigate('Home')}>
                
                <Text style={styles.textStyle}>New Game</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
}
const LostModal = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.overallContainer}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Ionicons name={'sad'} size={40} solid color="#145A32"/>
                <Text style={styles.modalText}>Oops! You lost...</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={()=> navigation.navigate('Home')}>
                
                <Text style={styles.textStyle}>New Game</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
}

export default WonLostModal;

export let myInitialBalance = 100
