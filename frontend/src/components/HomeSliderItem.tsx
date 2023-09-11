import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { IEvent } from '../model/eventData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationState, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';
import { formatDate } from '../util/dateFormat';

interface IProps {
    item: IEvent
}
const HomeSliderItem: React.FC<IProps> = ({ item }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const { width } = Dimensions.get('window')
    const _width = width - 40
    return (
        <TouchableOpacity onPress={() => navigation.navigate('HomeStack', {
            screen: 'EventDetail',
            params: { item: item }
        })}>
            <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10, width: _width }}>
                {item?.images?.map((image: string, index: number) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={{ width: '100%', height: '70%', resizeMode: 'cover', borderRadius: 10 }}
                    />
                ))}
                <View style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name='map-marker' size={18} color={'#F9742A'} />
                            <Text style={{ paddingLeft: 5 }}>{item.location_information.city}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name='calendar-range' size={18} color={'#F9742A'} />
                            <Text style={{ paddingLeft: 5 }}>{formatDate(item.date)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeSliderItem

const styles = StyleSheet.create({
    child: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})