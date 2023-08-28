

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { BASE_URL,API_KEY } from '@env';
function App() {

  interface Item {
    name: string; // Burada item objesinin içinde yer alması gereken alanları belirtiyorsunuz
  }

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get('http://192.168.1.37:3000/api/categories?api_key=17bcaf6d3a99f8967c98606b11d56a0d')
  //     .then(response => {
  //       setData(response.data.result);
  //       console.log(response.status)
  //     })
  //     .catch(error => {
  //       console.error('Veri çekme hatası:', error);
  //     });
  // }, [])

  // console.log(BASE_URL)
  // const renderItem = ({ item }: { item: Item }) => (
  //   <View style={{ padding: 10 }}>
  //     <Text>{item.name}</Text>
  //   </View>
 /// );
  return (
    <SafeAreaView>
      <Text>{API_KEY}+</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
