import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screenName } from "./screens-name"
import HomeScreen from "../screens/Home/HomeScreen"
import { navigationRef } from "./root-navigator"
import ProfileScreen from "../screens/Profile/ProfileScreen"
import BaiTap1PCMT from "../screens/TanPCM/BaiTap1/BaiTap1"
import BaiTap2PCMT from "../screens/TanPCM/BaiTap2/BaiTap2"
import BaiTap3PCMT from "../screens/TanPCM/BaiTap3/BaiTap3"
// import BaiTap3PCMT from "../screens/TanPCM/BaiTap3/BaiTap3"
// import BaiTap4PCMT from "../screens/TanPCM/BaiTap4/BaiTap4"
import BT1DPT from "../screens/ThanhDP/screens/View/BT1"
import BT2DPT from "../screens/ThanhDP/screens/View/BT2"
import BT3DPT from "../screens/ThanhDP/screens/View/BT3"
// import BT4DPT from "../screens/ThanhDP/screens/View/BT4"
import BT5DPT from "../screens/ThanhDP/screens/View/BT5"
import BT7DPT from "../screens/ThanhDP/screens/View/BT7"


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
      <Stack.Screen name={screenName.ThanhDP} component={BT7DPT} />
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