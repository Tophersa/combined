import React from 'react'
import { Colours } from '../utilities/Colours';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import Home from '../screens/Home/Home';
import Reports from '../screens/Reports/Reports';
import Alerts from '../screens/Alerts/Alerts';
import Profile from '../screens/Profile/Profile';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
//Icons
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';


const BottonTabOptions = {
    "tabBarHideOnKeyboard": true,
    "tabBarActiveTintColor": Colours.WHITE,
    "tabBarInactiveTintColor": Colours.LIGHTGRAY,
    "tabBarShowLabel": true,
    "tabBarLabelPosition": "beside-icon",
    "tabBarStyle": [
      {
        "display": "flex",
        "backgroundColor": Colours.TAB,
        "borderTopColor": Colours.PRIMARY,
        padding: 15,
        paddingBottom: 20,
        margin: 5,
        borderRadius: 15,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
      },
      null
    ],
    tabBarLabelStyle: { fontWeight: '700'},
}
const Tab = createBottomTabNavigator();

const colorR = Colours.RED

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={BottonTabOptions}>
            <Tab.Screen name="Home" component={Home} 
                options={{tabBarIcon: ({color, focused}) =>(
                    <Ionicons name="home" size={30} color={focused?colorR:color} />    
                ), headerShown: false}}
            />
            
            <Tab.Screen name="Reports" component={Reports} style={styles.container}
                options={{tabBarIcon: ({color, focused}) =>(
                    <Fontisto name="nav-icon-list-a" size={22} color={focused?colorR:color} /> 
                ), headerShown: false}}
            />
            <Tab.Screen name="Alerts" component={Alerts} 
                options={{tabBarIcon: ({color, focused}) =>(
                    <MaterialCommunityIcons name="alarm-light" color={focused?colorR:color} size={30} />  
                ), headerShown: false}}
            />
            <Tab.Screen name="Profile" component={LoginScreen} 
                options={{tabBarIcon: ({color, focused}) =>(
                    <Icon name="user" size={30} color={focused?colorR:color} />  
                ),headerShown: false       
            }}
            />

      </Tab.Navigator>
    )
}

export default HomeTabNavigator
