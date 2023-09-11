import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IEvent } from '../model/eventData'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/navigationTypes'
import { eventListFormatDate, formatDate } from '../util/dateFormat'

interface IProps {
    item: IEvent,
    index: number
}

const EventListItem: React.FC<IProps> = ({ item, index }) => {

    //Navigaiton
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const listToDetail = () => {
        navigation.navigate('EventStack', {
            screen: 'EventDetail',
            params: { item: item }
        })
    }

    return (
        <TouchableOpacity onPress={() => listToDetail()}>
            <View style={{ marginTop: index === 0 ? 10 : 0, marginBottom: 10 }}>
                <Image source={{ uri: item.images[0] }} style={styles.image} />
                <View style={styles.container}>
                    <Text style={styles.text1}>{eventListFormatDate(item.date)}</Text>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Text style={styles.text3}>{item.location_information.place}, {item.location_information.city}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EventListItem

const styles = StyleSheet.create({
    image: {
        width: '100%', height: 200, resizeMode: 'cover', borderRadius: 10
    },
    container: { backgroundColor: 'rgba(0, 0, 0, 0.7)', bottom: 0, position: 'absolute', width: '100%', padding: 20, flexDirection: 'column', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    text1: { color: '#A0A1A5', fontWeight: '500', fontSize: 12, marginBottom: 3 },
    text2: { color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 3 },
    text3: { color: '#A0A1A5', fontWeight: '500', fontSize: 12 },

})