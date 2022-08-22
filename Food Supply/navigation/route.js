import React from 'react';
import { color,View,Text,TouchableOpacity, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {enableScreens} from 'react-native-screens';
import GetStarted from '../screens/GetStarted/GetStarted';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import FoodMenu from '../screens/FoodMenu/foodMenu';
import TermCondition from '../screens/TERM AND CONDITION/t&c';
import Profile from '../screens/User Profile/profile';
import MyOrder from '../screens/order/myOrder';
import MyFabourite from '../screens/favourite/myFabourite';

const Stack = createNativeStackNavigator();

const homeTab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <homeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <homeTab.Screen name="Home" component={FoodMenu}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="home"
              size={28}
              color={focused ? '#106ECD' : '#9C9C9C'}
            />
          ),
        }}
      />
      <homeTab.Screen name="Favorite" component={MyFabourite} 
      options={{
        tabBarIcon: ({focused}) => (
          <FontAwesome
            name="heart"
            size={24}
            color={focused ? '#106ECD' : '#9C9C9C'}
          />
        ),
      }}/>
      <homeTab.Screen name="MyOrder" component={MyOrder} 
      options={{
        tabBarIcon: ({focused}) => (
          <FontAwesome
            name="star"
            size={24}
            color={focused ? '#106ECD' : '#9C9C9C'}
          />
        ),
      }}
      />
      <homeTab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({focused}) => (
          <FontAwesome
            name = "user-o"
            size={24}
            color={focused ? '#106ECD' : '#9C9C9C'}
          />
        ),
      }}/>
    </homeTab.Navigator>
  );
}
// const HomeTabs =() => {

//    return ( <homeTab.Navigator initialRouteName="Home"
//     screenOptions={{
//       headerShown:false
//     }}>
//       <homeTab.Screen name="Home"
//       component={FoodMenu}
//       options={{
//         tabBarIcon: ({focused}) => (
//           <Icon name="home" size={24} color={focused ? '#106ECD' : '#9C9C9C'}/>)
//            }}
//         />
//       <homeTab.Screen name="Fabourite" component={MyFabourite} />
//       <homeTab.Screen name="MyOrder" component={MyOrder} />
//       <homeTab.Screen name="Profile" component={Profile} />
//       </homeTab.Navigator>)

// }

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="term_Condition" component={TermCondition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
