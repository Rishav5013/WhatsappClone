import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const SettingToProfile = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SettingScreen}
        name="SettingScreen"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: 'Edit Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingToProfile;
