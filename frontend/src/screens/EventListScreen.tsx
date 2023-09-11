import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { IEvent, IEventData } from '../model/eventData'
import { RootState } from '../redux/store/configureStore'
import { getAllEvent } from '../redux/actions/allEventActions'
import EventListItem from '../components/EventListItem'
import Spinner from 'react-native-spinkit'

const statusBarHeight = StatusBar.currentHeight || 0
const headerTop = statusBarHeight + 20

const EventListScreen = () => {

  //Dispatch
  const dispatch: Dispatch<any> = useDispatch()
  //useSelector
  const allEvents: IEventData = useSelector((state: RootState) => state.allEventReducer.allEvents)
  const eventIsLoading: boolean = useSelector((state: RootState) => state.allEventReducer.loading)
  //TRIGGER REDUX FUNC
  useEffect(() => {
    dispatch(getAllEvent())
  }, [])

  //PAGINATION EVENTS
  const ITEMS_PER_PAGE = 4;
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    paginationList(page);
  }, [page]);

  const paginationList = (pageNumber: number) => {
    setIsLoading(true);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newData = allEvents?.results?.slice(startIndex, endIndex) || []
    // const newData = searchText ? allEvents?.results?.filter((item) =>
    //   item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).slice(startIndex, endIndex) :
    //   allEvents?.results?.slice(startIndex, endIndex) || []
    const currentDate = new Date();

    const filteredData = newData.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > currentDate;
    });

    setTimeout(() => {
      setData((prevData) => [...prevData, ...filteredData]);
      setIsLoading(false);
    }, 1000);

  };

  const handleEndReached = () => {
    if (!isLoading) {
      setPage(page + 1);
    }
  };

  const renderLoader = () => {
    if (isLoading || searchIsLoading) {
      return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', bottom: 0 }}>
          <Spinner color='#F9742A' size={24} type='ThreeBounce' isVisible />
        </SafeAreaView>
      );
    }
  }

  //FILTER
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState<IEvent[]>([]);
  //const SEARCH_ITEMS_PER_PAGE = 4;
  const [searchPage, setsearchPage] = useState(0);
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchTotalData, setSearchTotalData] = useState(0)
  useEffect(() => {
    setSearchData([])
    setsearchPage(1)
    searchPaginationList(searchPage);
  }, [searchText])

  const searchHandleEndReached = () => {
    if (!searchIsLoading) {
      setsearchPage(searchPage + 1);
    }
  };

  useEffect(() => {
    searchPaginationList(searchPage);
  }, [searchPage]);

  const searchPaginationList = (pageNumber: number) => {
    setSearchIsLoading(true);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const newData = allEvents?.results?.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      item.owner.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ) || []
    const newDataSlice = newData?.slice(startIndex, endIndex) || []

    const currentDate = new Date();

    const filteredData = newDataSlice.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > currentDate;
    });

    setSearchTotalData(filteredData.length)

    setTimeout(() => {
      setSearchData((prevData) => [...prevData, ...filteredData]);
      setSearchIsLoading(false);
    }, 1000);


  };

  const clearText = () => {
    setSearchText('')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <LinearGradient colors={['#191E28', '#30343D']} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
        <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold', fontStyle: 'italic' }}>Ǝ</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginHorizontal: 20, flex: 1, backgroundColor: '#4F535A' }}>
          <MaterialCommunityIcons name="magnify" size={24} color="white" style={{ marginHorizontal: 8 }} />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#A0A1A5"
            underlineColorAndroid='transparent'
            placeholder='Muhteşem etkinleri bul...'
            returnKeyType='search'
            multiline={false}
            maxLength={20}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          {searchText !== '' && (
            <TouchableOpacity onPress={clearText}>
              <MaterialCommunityIcons name="close-circle" size={20} color="gray" style={{ marginHorizontal: 8 }} />
            </TouchableOpacity>
          )}
        </View>

        <MaterialCommunityIcons name='filter' size={24} color={'#F9742A'} style={{ right: 0 }} />
      </LinearGradient>

      <View style={{ flex: 1, paddingHorizontal: 10, }}>
        {searchText ? (
          <>
            <FlatList
              contentContainerStyle={{ minHeight: '100%' }}
              data={searchData}
              renderItem={({ item, index }) => (
                <EventListItem item={item} index={index} />
              )}
              onEndReachedThreshold={0.1}
              onEndReached={searchHandleEndReached}
              ListFooterComponent={renderLoader}
              showsVerticalScrollIndicator={false}
            />
          </>) : (
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <EventListItem item={item} index={index} />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={handleEndReached}
            ListFooterComponent={renderLoader}

            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default EventListScreen

const styles = StyleSheet.create({
  header: {
    //padding:20,
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingTop: headerTop,
    paddingHorizontal: 20,
    paddingBottom: 20,
    //justifyContent:'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    //marginLeft: 20,
    color: 'white',
  },
})