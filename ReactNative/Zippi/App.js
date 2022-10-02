/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import type {Node} from 'react';


import Router from './src/navigation/Router';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import { withAuthenticator } from 'aws-amplify-react-native'

import {Auth, API, graphqlOperation} from 'aws-amplify'
import {getUser} from './src/graphql/queries'
import {createUser} from './src/graphql/mutations'


const App: () => Node = () => {

  //run this only when App is first mounted
  useEffect(() => {
    const fetchUser = async() => {
      //get authenicated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      // console.log(userInfo)

      if(userInfo){
      //get the user Backend with the user Id from Auth
        const userData = await API.graphql(graphqlOperation(getUser, {id : userInfo.attributes.sub}))

        if(userData.data.getUser){
          console.log("User is already registered in the DB");
          return;
        }
        const newUser = {
          id : userInfo.attributes.sub,
          name: userInfo.username,
          status: 'Hey, wanna guess my coin?',
        }
        // console.log(newUser)
        
        await API.graphql(graphqlOperation(createUser, {input: newUser}))

      //If there is no user in DB with the id, then create one
      }
    }
    // return () => {
    //   fetchUser()
    // }
    fetchUser()
  }, [])


  return (
    <>
      <Router/>
    </>
  );
};



export default withAuthenticator(App)
