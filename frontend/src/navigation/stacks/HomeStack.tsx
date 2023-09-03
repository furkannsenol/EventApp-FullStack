import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';

const HomeStackScreens = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <>
            <HomeStackScreens.Navigator>
                <HomeStackScreens.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown:false
                    }}
                />
                <HomeStackScreens.Screen name="Search" component={SearchScreen} />
            </HomeStackScreens.Navigator>
        </>
    )

}

export default HomeStack