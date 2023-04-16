import React,{useEffect} from 'react';
import {Box} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../../screens/Signin';
import OtpScreen from '../../screens/OtpScreen';
import ProfileInfo from '../../screens/ProfileInfo';
import SplashScreen from 'react-native-splash-screen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Signin}
        name="SigninScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={OtpScreen}
        name="OtpScreen"
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
