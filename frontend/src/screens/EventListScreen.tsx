import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
const EventListScreen = () => {
  return (
    <View>
      <Text>EventListScreen</Text>
      <FastImage 
      source={{uri:'https://iaftm.tmgrup.com.tr/0c348e/1200/627/0/49/2048/1120?u=https://iftm.tmgrup.com.tr/2022/12/20/gokhan-ozenden-kotu-haber-kalp-krizi-gecirdi-gokhan-ozen-kimdir-kac-yasinda-nereli-evli-mi-cocugu-var-mi-gokha-1671510710211.jpeg'}}
      style={{width:300,height:200}}
      />
    </View>
  )
}

export default EventListScreen

const styles = StyleSheet.create({})