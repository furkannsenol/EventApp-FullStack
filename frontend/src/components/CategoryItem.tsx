import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICategory } from '../model/categoryData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface IProps {
    item: ICategory,
    index: number
}

const CategoryItem: React.FC<IProps> = ({ item, index }) => {
    return (
        <View style={styles.itemContainer}>
            <MaterialCommunityIcons name={item.icon} size={20} color={'#F9742A'} />
            <Text style={styles.itemText}>{item.name} </Text>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    itemText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginLeft: 5
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'
    }
})