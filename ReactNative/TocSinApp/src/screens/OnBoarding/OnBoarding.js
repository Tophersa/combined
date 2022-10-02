import React from 'react'
import { View, Text, Tex, TouchableOpacity,TouchableWithoutFeedback, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'
import { Colours } from '../../utilities/Colours';

const OnboardingScreen= () => {
    const navigation = useNavigation();

    return (
        <Onboarding
        onSkip={()=> navigation.replace('LoginScreen')}
        onDone={()=> navigation.navigate('LoginScreen')}
        pages={[
            {
            backgroundColor: '#01898c',
            image: <Image source={require('../../../assets/images/board3.png')} />,
            title: 'Inform the community',
            subtitle: 'Keep the community safe and informed',
            },
            {
            backgroundColor: '#ffc01c',
            image: <Image source={require('../../../assets/images/board1.png')} />,
            title: 'Real time updates',
            subtitle: 'Alert or inform your neighbours in less than a minute',
            },
            {
            backgroundColor: '#007eff',
            image: <Image source={require('../../../assets/images/board2.png')} />,
            title: 'Looking out for others',
            subtitle: 'Provide or receive support when you need one',
            },
            
        ]}
        />
    )
}

export default OnboardingScreen
