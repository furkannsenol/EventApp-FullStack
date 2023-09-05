import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Spinner from 'react-native-spinkit'

//import PagerView from 'react-native-pager-view';
//import { SliderBox } from "react-native-image-slider-box";
//import FastImage from 'react-native-fast-image'

import { ICategory, ICategoryData } from '../model/categoryData'
import { RootState } from '../redux/store/configureStore'
import { getCategory } from '../redux/actions/categoryActions'
import { IEvent, IEventData } from '../model/eventData'
import { getPopularEvent } from '../redux/actions/popularEventActions'

import CategoryItem from '../components/CategoryItem'
import HomeSliderItem from '../components/HomeSliderItem'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const categories: ICategoryData = useSelector((state: RootState) => state.categoryReducer.categories)
  const categoryIsLoading: boolean = useSelector((state: RootState) => state.categoryReducer.loading)
  const popularEvents: IEventData = useSelector((state: RootState) => state.popularEventReducer.popularEvents)
  const popularIsLoading: boolean = useSelector((state: RootState) => state.popularEventReducer.loading)

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getPopularEvent())
  }, [])

  const { width } = Dimensions.get('window')
  const _width = width - 40

  const statusBarHeight: number = StatusBar.currentHeight || 0
  const topPadding = statusBarHeight + 20

  if (popularIsLoading || categoryIsLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner color='#F9742A' size={75} type='ThreeBounce' isVisible />
      </SafeAreaView>
    );
  }
   // "27 Kasım 2023, Pazartesi"
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8', height: '100%' }}>
      <View style={{ flex: 3 }}>
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


      </View>

      <View style={{ flex: 6, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20, marginTop: -20, backgroundColor: '#F8F8F8' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#30343D', fontSize: 15, fontWeight: 'bold', marginRight: 3 }}>Popüler Etkinlikler</Text>
            <MaterialCommunityIcons name='fire' size={20} color='#F9742A' />
          </View>
          <Text style={{ color: '#F9742A' }}>Hepsini Görüntüle</Text>
        </View>

        <View style={[styles.child, { flex: .9, paddingTop: 10, width: _width }]}>
          <SwiperFlatList
            data={popularEvents?.results?.slice(0, 5)}
            showPagination
            //autoplay
            autoplayLoop
            autoplayDelay={2}
            autoplayLoopKeepAnimation
            paginationActiveColor='#F9742A'
            paginationStyleItem={{ width: 5, height: 5 }}
            paginationStyle={{ marginTop: 0 }}
            renderItem={({ item }: { item: IEvent }) => (
              <HomeSliderItem item={item} />)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#30343D', fontSize: 15, fontWeight: 'bold', marginRight: 5 }}>Kategoriler</Text>
              <MaterialCommunityIcons name='flare' size={20} color='#F9742A' />
            </View>
            <Text style={{ color: '#F9742A' }}>Hepsini Görüntüle</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              {categories?.results && categories?.results?.map((it: ICategory, index) => {
                return <CategoryItem item={it} index={index} key={it._id} />
              })}
            </View>
          </ScrollView>
        </View>

      </View>

    </SafeAreaView>
  )
}
const { width } = Dimensions.get('window')

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',

  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  viewPager: {
    flex: 1,
  },
  pageText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  child: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})