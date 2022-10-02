import React, { useState } from "react";
import { View, Text,Image,ImageBackground, Pressable, Modal, TouchableOpacity } from 'react-native'
import styles from './styles'
import WonLostModal from "../WonModal/WonLostModal";

const secretnumber = 1
const secretnumberFun = () => { secretnumber = Math.floor(Math.random()*10) +1;}



const HeadOrTail = (props) => {

    const [headGuess, setHeadGuess] = useState(false);
    const [tailGuess, setTailGuess] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const HeadGuessHandler  = () => {
        setHeadGuess(true);
        setModalVisible(true);
        }

    const tailGuessHandler  = () => {
        setTailGuess(true);
        setModalVisible(true);
        }

    return (
        <>
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/images/table2.jpg')} style={styles.image} imageStyle={{ borderRadius: 15}}>
            <TouchableOpacity style={styles.headContainer} onPress={HeadGuessHandler}>
            {/* <Pressable style={styles.headContainer} onPress={() => console.log("secretnumber")}> */}
            {/* <Pressable style={styles.headContainer} onPress={() => console.log(secretnumber)} > */}
                <Image source={require('../../../../../assets/images/head.png')} style={styles.tailImage}/>
                <Text style={styles.headText}>HEAD</Text>
            </TouchableOpacity>
            {/* </Pressable> */}
    
            {/* <Pressable style={styles.tailContainer} onPress={() => setModalVisible(true)}> */}
            <TouchableOpacity style={styles.tailContainer} onPress={tailGuessHandler}>
                <Image source={require('../../../../../assets/images/tail.png')} style={styles.tailImage}/>
                <Text style={styles.tailText}>TAIL</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>◀OR▶</Text>
            </ImageBackground>
        </View>

        <Modal animationType="fade" transparent={true} visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible);}}
        >
        {/* <WonModal/> */}
        <WonLostModal playerBtossedHead={props.tossedHead} playerBtossedTail={props.tossedTail} roomValue={props.roomValue} iGuessedHead={headGuess} iGuessedTail={tailGuess}/>
        </Modal>

        </>
    )
}

export default HeadOrTail
