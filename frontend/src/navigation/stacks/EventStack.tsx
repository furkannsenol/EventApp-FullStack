import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventDetailScreen from '../../screens/EventDetailScreen';
import EventListScreen from '../../screens/EventListScreen';

const ProductStackScreens = createNativeStackNavigator();

const EventStack = () => {
    return (
        <>
            <ProductStackScreens.Navigator>
                <ProductStackScreens.Screen name="EventList" component={EventListScreen} options={{headerShown:false}} />
                <ProductStackScreens.Screen name="EventDetail" component={EventDetailScreen} />
            </ProductStackScreens.Navigator>
        </>
    )

}

export default EventStack