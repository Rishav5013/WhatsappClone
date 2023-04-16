import React from 'react';
import {Box, Text} from 'native-base';
import CallsScreen from '../CallsScreen';
import CameraScreen from '../CameraScreen';
import StatusScreen from '../StatusScreen';
import ChatScreen from '../ChatScreen/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingToProfile from '../../navigation/SettingToProfile';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function Test() {
  return (
    <Box flex="1" justifyContent="center" alignItems="center">
      <Text>Home</Text>
    </Box>
  );
}

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: insets.bottom,
        },

        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Status') {
            iconName = focused ? 'md-sync-circle' : 'md-sync-circle-outline';
          } else if (route.name === 'Calls') {
            iconName = focused ? 'call-sharp' : 'call-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Chats') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Settings" component={SettingToProfile} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default HomeScreen;
