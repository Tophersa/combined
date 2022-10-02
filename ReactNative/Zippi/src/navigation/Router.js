import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeTabNavigator from './HomeTabNavigation';
import GuessingRoom from '../screens/GuessingRoom/GuessingRoom';
import ChooseGuessRoom from '../screens/ChooseGuessRoom/ChooseGuessRoom';
import InsideRoom from '../screens/InsideRoom/InsideRoom';

const Stack = createStackNavigator();

const Router = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabNavigator} 
                options={{title: "Home", headerShown: false}}/>

            <Stack.Screen name="ChooseGuessRoom" component={ChooseGuessRoom} 
                options={{title: "Join Room"}}/>

            <Stack.Screen name="InsideRoom" component={InsideRoom} 
               options={({route}) => ({title: route.params.roomName})}/>

            <Stack.Screen name="GuessingRoom" component={GuessingRoom} 
                options={{title: "Head OR Tail"}}           />

            {/* <Stack.Screen name="SearchResults" component={SearchResults} 
                options={{title: "Search your destination"}}/>

            <Stack.Screen name="DestinationSearch" component={DestinationSearch} 
                options={{title: "Search your destination"}}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

