import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../../screens/HomeScreen';
import EventStack from '../stacks/EventStack';
import SettingScreen from '../../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabMain = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="EventStack"
                    component={EventStack}
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="ticket" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen 
                name="Settings" 
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" size={24} color={color} />
                    ),
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabMain