import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventDetailScreen from '../../screens/EventDetailScreen';
import EventListScreen from '../../screens/EventListScreen';
import { IEvent } from '../../model/eventData';
import { EventTabParamList } from '../navigationTypes';



const EventStackScreens = createNativeStackNavigator<EventTabParamList>();

const EventStack = () => {
    return (
        <>
            <EventStackScreens.Navigator>
                <EventStackScreens.Screen name="EventList" component={EventListScreen} options={{ headerShown: false }} />
                <EventStackScreens.Screen name="EventDetail" component={EventDetailScreen} options={{ headerShown: false }} />
            </EventStackScreens.Navigator>
        </>
    )

}

export default EventStack