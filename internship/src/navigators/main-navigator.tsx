import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screenName } from "./screens-name"
import HomeScreen from "../screens/Home/HomeScreen"
import { navigationRef } from "./root-navigator"
import ProfileScreen from "../screens/Profile/ProfileScreen"
import BT2 from '../screens/ThanhDP/screens/List/BT2'
const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screenName.home}
    >
      {/* <Stack.Screen name={screenName.home} component={HomeScreen} />
      <Stack.Screen name={screenName.profile} component={ProfileScreen} /> */}
      <Stack.Screen name={screenName.ThanhDP} component={BT2} />
    </Stack.Navigator>
  )
}

export const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  )
}