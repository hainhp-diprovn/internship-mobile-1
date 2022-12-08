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
import BaiTap4PCMT from "../screens/TanPCM/BaiTap4/BaiTap4"
// import BaiTap5PCMT from "../screens/TanPCM/BaiTap5/BaiTap5"
// import BaiTap6PCMT from "../screens/TanPCM/BaiTap6/BaiTap6"
import BaiTap7PCMT from "../screens/TanPCM/BaiTap7/BaiTap7"
import BT1DPT from "../screens/ThanhDP/screens/View/BT1"
import BT2DPT from "../screens/ThanhDP/screens/View/BT2"
import BT3DPT from "../screens/ThanhDP/screens/View/BT3"
// import BT4DPT from "../screens/ThanhDP/screens/View/BT4"
import BT5DPT from "../screens/ThanhDP/screens/View/BT5"
import BT7DPT from "../screens/ThanhDP/screens/View/BT7"
import BaiTap1_Layout from "../screens/TanPCM/layout/BaiTap1"

import BaiTap2_Layout from "../screens/TanPCM/layout/BaiTap2"
import SliderVertical from '../screens/ThanhDP/screens/View/SliderVertical';
import SliderHorizontal from '../screens/ThanhDP/screens/View/SliderHorizontal';
import BT1_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT1"
import BT11_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT11"
import BT2_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT2"
import BT3_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT3"
import BT4_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT4"
import BT44_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT44"
import BT444_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT444"
import BT4444_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT4444"
import BT5_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT5"
import BT6_LayoutDPT from "../screens/ThanhDP/screens/Layout/BT6"

import BT8_LayoutDPT from '../screens/ThanhDP/screens/Layout/BT8';


const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screenName.home}
    >
      <Stack.Screen name={screenName.home} component={HomeScreen} />
      <Stack.Screen name={screenName.profile} component={ProfileScreen} />

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