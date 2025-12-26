import { StyleSheet } from 'react-native'
import React from 'react'
import {  Button, Card, Text } from 'react-native-paper';

const NewsItem = ({title,content,image,author}) => {
    return (
        <Card mode='elevated' style={styles.newsCard}>
            <Card.Title title={title}  />
            <Card.Cover source={{ uri: image }} />
            <Card.Content>
                <Text variant="bodyMedium">{content}</Text>
                <Text variant="bodyMedium">Author : {author}</Text>
            </Card.Content>
        </Card>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    newsCard :{
        marginHorizontal:5,
        marginVertical:3
    }
    
})