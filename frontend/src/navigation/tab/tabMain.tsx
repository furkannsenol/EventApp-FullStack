import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import EventStack from '../stacks/EventStack';
import SearchScreen from '../../screens/SearchScreen';
import SettingScreen from '../../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabMain = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="EventStack" component={EventStack} options={{tabBarLabel:'Events'}}/>
                <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabMain