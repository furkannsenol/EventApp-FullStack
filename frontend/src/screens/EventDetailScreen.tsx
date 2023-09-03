import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventTabParamList } from '../navigation/navigationTypes';


type Props = NativeStackScreenProps<EventTabParamList, 'EventDetail'>;


const EventDetailScreen: React.FC<Props> = ({ route }) => {
  const { item } = route?.params || {}
  return (
    <View>
      <Text>{item?.date}</Text>
      <Text>{item?._id}</Text>
      <Text>{item?._id}</Text>
      <Text>{item?._id}</Text>
      <Text>{item?._id}</Text>
      <Text>{item?._id}</Text>
      <Text>{item?._id}</Text>
    </View>
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({})