import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { ICategory, ICategoryData } from '../model/categoryData'
import { RootState } from '../redux/store/configureStore'
import { getCategory } from '../redux/actions/categoryActions'

const HomeScreen = () => {
  const dispatch: Dispatch<any> = useDispatch()

  const categories: ICategoryData = useSelector((state: RootState) => state.categoryReducer.categories)

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const renderCategoryItem = ({ item }: { item: ICategory }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={categories.results}
        renderItem={renderCategoryItem}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})