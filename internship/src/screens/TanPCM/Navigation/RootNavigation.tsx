import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './BaiTap1/Screen/ScreenA';
import ScreenB from './BaiTap1/Screen/ScreenB';
import ScreenC from './BaiTap1/Screen/ScreenC';
import ScreenD from './BaiTap1/Screen/ScreenD';
import ScreenE from './BaiTap1/Screen/ScreenE';

const Stack = createNativeStackNavigator();

const RootNavigationPage = () => {
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator initialRouteName="ScreenA" screenOptions={{headerShown:false}}>
                <Stack.Screen name="ScreenA" component={ScreenA} />
                <Stack.Screen name="ScreenB" component={ScreenB} />
                <Stack.Screen name="ScreenC" component={ScreenC} />
                <Stack.Screen name="ScreenD" component={ScreenD} />
                <Stack.Screen name="ScreenE" component={ScreenE} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigationPage
