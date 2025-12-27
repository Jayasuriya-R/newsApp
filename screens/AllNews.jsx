import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewsItem from '../components/NewsItem';
import generateFakeNews from '../data/FakeNews';

const AllNews = ({navigation}) => {
 const news = generateFakeNews(15);
  return (
    <SafeAreaProvider>
      <FlatList
        data={news}
        keyExtractor={(item)=> item.id}
        renderItem={({ item }) => (<NewsItem {...item} navigation={navigation}/>)}
      />
    </SafeAreaProvider>
  )
}

export default AllNews

const styles = StyleSheet.create({})