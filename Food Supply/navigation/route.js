import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import GetStarted from '../screens/GetStarted/GetStarted';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import FoodMenu from '../screens/FoodMenu/foodMenu';


const Stack = createNativeStackNavigator();


function Route() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="FoodMenu" component={FoodMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Route;