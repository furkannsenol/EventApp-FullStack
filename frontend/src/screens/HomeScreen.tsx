import { FlatList, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { ICategory, ICategoryData } from '../model/categoryData'
import { RootState } from '../redux/store/configureStore'
import { getCategory } from '../redux/actions/categoryActions'
import HomeHeader from '../components/HomeHeader'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IEvent, IEventData, IPricing } from '../model/eventData'
import { getPopularEvent } from '../redux/actions/popularEventActions'
import PagerView from 'react-native-pager-view';
import CategoryItem from '../components/CategoryItem'
import { SliderBox } from "react-native-image-slider-box";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import FastImage from 'react-native-fast-image'
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      {(popularIsLoading || categoryIsLoading) && <ActivityIndicator size="large" />}
      <View style={{ flex: 3 }}>
        <HomeHeader />
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
            autoplay
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