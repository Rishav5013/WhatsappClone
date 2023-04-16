import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateNew from '../screens/CreateNew';
import CreateGroup from '../screens/CreateGroup';
import NewContact from '../screens/NewContact';
import InternalChatScreen from '../screens/InternalChatScreen';

const CreateNewNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'modal',
        }}
        name="CreateNew"
        component={CreateNew}
      />

      <Stack.Screen
        component={CreateGroup}
        name="CreateGroup"
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'modal',
        }}
      />

      <Stack.Screen
        component={NewContact}
        name="NewContact"
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'modal',
        }}
      />

      <Stack.Screen
        component={InternalChatScreen}
        name="InternalChatScreen"
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'modal',
        }}   
      />
    </Stack.Navigator>
  );
};

export default CreateNewNavigation;
