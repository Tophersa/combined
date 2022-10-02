import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Reports from '../screens/Reports/Reports'
import Alerts from '../screens/Alerts/Alerts'
import Profile from '../screens/Profile/Profile'
import Home from '../screens/Home/Home';
import Alert from '../components/Alert/Alert';
import HomeTabNavigator from './HomeTabNavigation';
import { Colours } from '../utilities/Colours';
import AddAlert from '../screens/AddAlert/AddAlert';
import AddLocation from '../components/AddLocation/AddLocation';
import OnboardingScreen from '../screens/OnBoarding/OnBoarding';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Stack = createNativeStackNavigator();

const Router = () => {

  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}
          options={{ title: '',  headerShown: false, headerTintColor: Colours.WHITE, 
          headerStyle: {
            backgroundColor: Colours.PRIMARY,
            shadowColor: Colours.PRIMARY,
            elevation: 0,
          },
        headerLeft: ()=>{
          <View style={{marginLeft: 10}}>
          <FontAwesome.Button name="long-arrow-left" 
          size={25}
          backgroundColor= "#f9fafd"
          color= "#333"
          // onPress={()=> navigation.navigate('AddAlert')}
          />
          </View>
        }
        }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{ title: 'LoginScreen',  headerShown: false }}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen}
          options={{ title: 'SignupScreen',  headerShown: false}}
        />
        <Stack.Screen name="HomeScreen" component={HomeTabNavigator}
          options={{ title: 'HomeScreen',  headerShown: false }}
        />
        <Stack.Screen name="Reports" component={Reports}
          options={{ title: 'Reports' }}
        />
        <Stack.Screen name="Alerts" component={Alerts}
          options={{ title: 'Alerts' }}
        />
        <Stack.Screen name="Profile" component={Profile}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen name="Alert" component={Alert}
          options={{ title: 'Alert',  headerShown: true, headerTintColor: Colours.WHITE, 
          headerStyle: {
            backgroundColor: Colours.PRIMARY
          }, }}
        />
        <Stack.Screen name="AddAlert" component={AddAlert}
          options={{ title: '',  headerShown: true, headerTintColor: Colours.WHITE, 
          headerStyle: {
            backgroundColor: Colours.PRIMARY
          }, }}
        />
        <Stack.Screen name="AddLocation" component={AddLocation}
          options={{ title: '',  headerShown: true, headerTintColor: Colours.WHITE, 
          headerStyle: {
            backgroundColor: Colours.PRIMARY
          }, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router

