import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import History from '../screens/History';
import Trade from '../screens/Trade';

import { useNavigation } from '@react-navigation/native'


const Stack = createNativeStackNavigator();

const Router = () => {

  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HistoryScreen" component={History}
          options={{ title: 'LoginScreen',  headerShown: false }}
        />
        <Stack.Screen name="TradeScreen" component={Trade}
          options={{ title: 'SignupScreen',  headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router

