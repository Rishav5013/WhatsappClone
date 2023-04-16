import React, {useEffect} from 'react';
import {Box} from 'native-base';
import HomeScreen from '../../screens/HomeScreen';
import ContactInfo from '../../screens/ContactInfo';
import InternalChatScreen from '../../screens/InternalChatScreen';
import CreateNewNavigation from '../CreateNewNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import ProfileInfo from '../../screens/ProfileInfo';
import {getUserData} from '../../store/actions/userData';
import {useSelector} from 'react-redux';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={
        CurentUserData.firstname ||
        CurentUserData.lastname ||
        CurentUserData.image
          ? 'HomeScreen'
          : 'ProfileInfo'
      }>
      <Stack.Screen
        component={ProfileInfo}
        name="ProfileInfo"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={InternalChatScreen}
        name="InternalChatScreen"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={ContactInfo}
        name="ContactInfo"
        options={{headerShown: true, headerBackTitleVisible: false}}
      />

      <Stack.Screen
        component={CreateNewNavigation}
        name="CreateNewNavigation"
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
