

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://192.168.1.37:3000/api/categories?api_key=17bcaf6d3a99f8967c98606b11d56a0d')
      .then(response => {
        setData(response.data);
        console.log(response.status)
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, [])
  const targetDate = new Date('2023-08-26T20:00:00Z'); // Hedef tarih

  const unixTimestamp = Math.floor(targetDate.getTime() / 1000); // Unix zaman damgası
  console.log(unixTimestamp);

  //const unixTimestamp = 180111600; // Örnek Unix zaman damgası

  const date = new Date(unixTimestamp * 1000); // Unix zaman damgasını milisaniyeye çevirin

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = date.toLocaleDateString('tr-TR', options); // Türkçe tarih formatı
  console.log(formattedDate)
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={data.results}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
