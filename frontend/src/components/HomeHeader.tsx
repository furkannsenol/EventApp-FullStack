import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeHeader = () => {
    const statusBarHeight: number = StatusBar.currentHeight || 0
    const topPadding = statusBarHeight + 20

    return (<>
        <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
        <LinearGradient colors={['#191E28', '#30343D']} style={{ width: '100%', paddingTop: topPadding, height: '100%', paddingHorizontal: 20, }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold', fontStyle: 'italic' }}>Ǝ</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', fontStyle: 'italic', paddingLeft: 10, marginTop: 12 }}>Etkinlikler</Text>
                </View>
                <Image source={{ uri: 'https://leadership.ng/wp-content/uploads/2023/03/davido.png' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
            <View style={{ paddingTop: 30 }}>
                <Text style={{ color: '#A0A1A5', fontWeight: '500', fontSize: 14 }}>Merhaba Furkan</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Muhteşem Etkinlikleri Keşfet</Text>
            </View>
            {/*<View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, height: 50, marginTop: 30, backgroundColor: '#4F535A' }}>
                <MaterialCommunityIcons name="magnify" size={24} color="white" style={{ marginHorizontal: 8 }} />
                <TextInput
                    style={{ flex: 1, height: 40, color: 'gray' }}
                    //value={text}
                    // onChangeText={handleChangeText}
                    maxLength={30}
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#73767C'
                    placeholder='Muhteşem etkinleri bul'
                    returnKeyType='search'
                    multiline={false}
                />
    </View>*/}
        </LinearGradient>

    </>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',

    },
})