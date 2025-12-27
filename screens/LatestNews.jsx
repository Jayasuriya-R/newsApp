import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import generateFakeNews from '../data/FakeNews'
import NewsItem from '../components/NewsItem'

const LatestNews = ({navigation}) => {
  const news = generateFakeNews(8);
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

export default LatestNews

const styles = StyleSheet.create({})