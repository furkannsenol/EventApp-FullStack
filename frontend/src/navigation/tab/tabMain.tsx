import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EventStack from '../stacks/EventStack';
import SettingScreen from '../../screens/SettingScreen';
import HomeStack from '../stacks/HomeStack';
import { IEvent } from '../../model/eventData';
import { RootStackParamList } from '../navigationTypes';


  
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabMain = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='HomeStack'
                safeAreaInsets={{ //Fixed Bottom-Tab jump bug
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#F9742A',
                    tabBarInactiveTintColor: 'gray',
                    
                }}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
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
                    name="bos"
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map-marker" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabMain