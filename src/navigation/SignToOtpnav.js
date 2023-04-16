import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Signin/index.js";
import OtpScreen from "../screens/OtpScreen/index.js";
import ProfileInfo from "../screens/ProfileInfo/index.js";
import { NavigationContainer } from "@react-navigation/native";


 const SignToOtpnav = () => {
    const Stack = createNativeStackNavigator(); 
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

        <Stack.Screen
          component={ProfileInfo}
          name="ProfileInfo"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
}
export default SignToOtpnav;
