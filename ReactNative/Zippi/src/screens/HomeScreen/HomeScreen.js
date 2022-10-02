import React, { useState } from 'react';
import { View, Text, Image,Pressable, TouchableHighlight , RefreshControl, SafeAreaView, ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import myProfile from '../../../assets/data/myProfile';
import { myInitialBalance } from '../GuessingRoom/components/WonModal/WonLostModal';
import { Authenticator, SignIn, SignOut } from 'aws-amplify-react-native';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.overallContainer}>

        {/* <ScrollView contentContainerStyle={styles.scrollView} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}> */}
        

            <Image source={{uri:'https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvOArRVOnh...IwXs1M3EMoAJtliMugvRo8fk5'}} style={styles.logoImage}/>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>AVAIL. BALANCE</Text>
                <Text style={styles.balanceR}>
                    R<Text style={styles.balanceAmount}>{myInitialBalance}</Text>
            
                </Text>
                <Pressable>
                    <Icon  name="refresh" size={25} color="black" style={styles.icon} />
                </Pressable>
                
            </View>

            {/* <View>
                <SignOut />
                <Text>gggg</Text>
            </View> */}
            
            {/* <Authenticator hideDefault={true}>
            <SignIn />
            <MyCustomSignUp override={'SignUp'}/> 
            </Authenticator> */}

            <View style={styles.row}>
                <TouchableHighlight style={styles.rowBox} onPress={()=> navigation.navigate('ChooseGuessRoom')}>
                    <>
                    <Icon  name="users" size={35} color="yellow" style={styles.icon} />
                    <Text style={styles.text}>PLAY ONLINE</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight style={styles.rowBox} onPress={()=> navigation.navigate('GuessingRoom')}>
                    <>
                    <Icon  name="user" size={35} color="yellow" />
                    <Text style={styles.text}>BUDDY ZIPPI</Text>
                    </>
                </TouchableHighlight>
            </View>
            <View style={styles.row}>
                <TouchableHighlight style={styles.rowBox}>
                    <>
                    <MaterialCommunityIcons  name="credit-card-plus" size={35} color="yellow" />
                    <Text style={styles.text}>DEPOSIT</Text>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.rowBox}>
                    <>
                    <MaterialCommunityIcons  name="credit-card-check" size={35} color="yellow" />
                    <Text style={styles.text}>WITHDRAW</Text>
                    </>
                </TouchableHighlight>
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

export default HomeScreen
