import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import DestinationSearch from '../screens/DestinationSearch/DestinationSearch';

import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Destination Search" component={DestinationSearch} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

