import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name={'ios-home'} size={25} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeBase" options={{ headerShown: false }} component={MyTabs} />
                {/* add your another screen here using -> Stack.Screen */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
