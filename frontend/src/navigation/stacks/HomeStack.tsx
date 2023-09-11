import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import EventDetailScreen from '../../screens/EventDetailScreen';
import { HomeTabParamList } from '../navigationTypes';

const HomeStackScreens = createNativeStackNavigator<HomeTabParamList>();

const HomeStack = () => {
    return (
        <>
            <HomeStackScreens.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <HomeStackScreens.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <HomeStackScreens.Screen name="Search" component={SearchScreen} />
                <HomeStackScreens.Screen name='EventDetail' component={EventDetailScreen} options={{animation:'slide_from_right'}} />
            </HomeStackScreens.Navigator>
        </>
    )

}

export default HomeStack