import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView, Linking, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { EventTabParamList, RootStackParamList } from '../navigation/navigationTypes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import ReadMore from 'react-native-read-more-text'
import MapView, { Marker } from 'react-native-maps'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

type Props = NativeStackScreenProps<EventTabParamList, 'EventDetail'>

const statusBarHeight: number = StatusBar.currentHeight || 0
//const _width = Dimensions.get('window').width

const EventDetailScreen: React.FC<Props> = ({ route }) => {
  const { item } = route?.params || {}

  //Navigation
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const turnBack = () => {
    navigation.goBack()
  }
  //Maps
  const latitude = item.location_information.latitude
  const longitude = item.location_information.longitude
  const openMapsApp = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    Linking.openURL(url)
  }

  //Modal
  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.imageContainer}>
        <Image source={{ uri: item.images[0] }} style={[styles.image]} />

        <TouchableOpacity onPress={() => turnBack()} style={styles.circleTouchable}>
          <View style={styles.circleChevron}>
            <MaterialCommunityIcons name='chevron-left' size={24} color={'white'} />
          </View>
        </TouchableOpacity>
        <View style={styles.circleHeart}>
          <MaterialCommunityIcons name='heart' size={24} color={'white'} />
        </View>
      </View>

      <View style={styles.eventContents}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.title}>Etkinliğe Dair</Text>
          <ReadMore numberOfLines={2} renderTruncatedFooter={(handlePress) => (
            <Text onPress={handlePress} style={styles.readMore}>Devamını Oku...</Text>
          )}
            renderRevealedFooter={(handlePress) => (
              <Text onPress={handlePress} style={styles.readMore}>Daha Az Göster</Text>
            )}>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </ReadMore>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{
                width: 50, height: 50, backgroundColor: 'rgba(234, 222, 216, 0.6)', borderRadius: 25, alignItems: 'center',
                justifyContent: 'center',
              }}>
                <MaterialCommunityIcons name='map-marker' size={24} color={'#F9742A'} />
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10, flex: .9 }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: '#A0A1A5' }}>{item.location_information.city}, Türkiye</Text>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>{item.location_information.place}</Text>
              </View>
            </View>
            <MaterialCommunityIcons name='chevron-right' size={24} color={'#000'} />
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{
                width: 50, height: 50, backgroundColor: 'rgba(234, 222, 216, 0.6)', borderRadius: 25, alignItems: 'center',
                justifyContent: 'center',
              }}>
                <MaterialCommunityIcons name='calendar-month' size={24} color={'#F9742A'} />
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: '#A0A1A5' }}>{item.date}</Text>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>{item.show_time}</Text>
              </View>
            </View>
            <MaterialCommunityIcons name='chevron-right' size={24} color={'#000'} />
          </View>

          <Text style={styles.title}>Haritalar</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={openMapsApp}
            >
              <Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
                title={item.location_information.place}
                description="Konum"
              />
            </MapView>
          </View>

        </ScrollView>
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.bottomButtonContainer}>
          <View style={styles.redButton}>
            <Text style={styles.buttonText}>Bilet Fiyatları</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Fiyat Bilgileri</Text>
          <FlatList
            data={item.pricing_list}
            keyExtractor={(item) => item.category_name}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleModal()}>
                <View style={styles.modalItem}>
                  <Text style={styles.modalItemText}>{item.category_name}: </Text>
                  <Text style={styles.modalItemText}>{item.pay} TL</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.modalCloseButton}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView >
  )
}

export default EventDetailScreen


const styles = StyleSheet.create({
  //Image Properties
  imageContainer: {
    flex: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch'
  },
  circleChevron: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(128, 128, 128, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: statusBarHeight + 20,
    left: 20,
  },
  circleHeart: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(128, 128, 128, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: statusBarHeight + 20,
    right: 20,
  },
  circleTouchable: {
    position: 'absolute',
    zIndex: 1
  },
  //Event Content Properties
  eventContents: {
    flex: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F8F8F8',
    marginTop: -20,
    paddingHorizontal: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  readMore: {
    color: '#F9742A',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 30
  },
  description: {
    color: '#A0A1A5',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',

  },

  //Maps
  mapContainer: {
    width: '100%',
    height: 200, marginBottom: 20
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: '#131822',
    padding: 20,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  //Modal
  modalContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding:20,
    minHeight:200,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  modalItemText: {
    color: 'white',
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F9742A',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
})