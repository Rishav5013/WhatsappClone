import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen/index.js';
import SearchBox from '../components/SearchBox/index.js';

const ChatToSearch = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChatScreen}
        name="ChatScreen"
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        component={SearchBox}
        name="SearchBox"
        options={{headerShown: true, headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatToSearch;
