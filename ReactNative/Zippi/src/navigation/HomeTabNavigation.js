import React from 'react'
import { View, Text } from 'react-native'
// import HomeScreen from '../screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GuessingRoom from '../screens/GuessingRoom/GuessingRoom';

import styles from './styles';


const activeIconsColor = 'yellow';
const inactiveIconsColor = 'white';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: activeIconsColor, inactiveTintColor: inactiveIconsColor, showLabel: false, keyboardHidesTabBar: true, style: styles.container}}>
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{tabBarIcon: ({color}) =>(
                    <Ionicons name="home" size={30} color={color} />   
                    // <Ionicons name="home" size={25} color={color} />  
                )}}
            />
            
            <Tab.Screen name="Profile" component={GuessingRoom} 
                options={{tabBarIcon: ({color}) =>(
                    // <Fontisto name="search" size={30} color="red" />
                    <Icon name="user-circle-o" size={30} color={color} />  
                )}}
            />
            {/* <Tab.Screen name="Add" component={HomeScreen} 
                options={{tabBarIcon: ({color}) =>(
                    // <Fontisto name="search" size={30} color="red" />  
                    <Ionicons name="add" size={30} color={color} />  
                    // <MaterialIcons name="add-box" size={25} color={color} />  
                )}}
            />
            <Tab.Screen name="Profiles" component={HomeScreen} 
                options={{tabBarIcon: ({color}) =>(
                    // <Fontisto name="search" size={30} color="red" />  
                    <Icon name="user-o" size={25} color={color} />  
                )}}
            /> */}

      </Tab.Navigator>
    )
}

export default HomeTabNavigator
