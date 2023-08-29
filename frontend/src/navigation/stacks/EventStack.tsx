import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventDetailScreen from '../../screens/EventDetailScreen';
import EventListScreen from '../../screens/EventListScreen';

const EventStackScreens = createNativeStackNavigator();

const EventStack = () => {
    return (
        <>
            <EventStackScreens.Navigator>
                <EventStackScreens.Screen name="EventList" component={EventListScreen} options={{headerShown:false}} />
                <EventStackScreens.Screen name="EventDetail" component={EventDetailScreen} />
            </EventStackScreens.Navigator>
        </>
    )

}

export default EventStack