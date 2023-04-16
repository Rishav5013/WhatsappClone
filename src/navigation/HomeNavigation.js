import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,Button } from 'react-native';
import CameraScreen from "../screens/CameraScreen"
import ChatScreen from "../screens/ChatScreen"
import StatusScreen from "../screens/StatusScreen"
import CallScreen from "../screens/CallsScreen"
import SelectChatNavigation from "../navigation/SelectChatNavigation"
import { Box } from 'native-base';

const Tab = createMaterialTopTabNavigator();

export default function HomeNavigation() {
  return (
    <SafeAreaProvider >

    <Tab.Navigator
    initialRouteName='CHATS'
    style={{ backgroundColor: '#ffffff' }}
    tabBarOptions={{
      activeTintColor: '#ffffff', //Tint
      tabStyle: { backgroundColor: '#075E54'},
      inactiveTintColor: 'grey',
      labelStyle: { fontWeight: "bold"},
    }}
    >  

      <Tab.Screen name="Camera" component={CameraScreen}/>
      <Tab.Screen name="CHATS" component={ChatScreen}/>
      <Tab.Screen name="STATUS" component={StatusScreen} />
      <Tab.Screen name="CALLS" component={CallScreen} />

    </Tab.Navigator>

    </SafeAreaProvider>
    
  );
}


