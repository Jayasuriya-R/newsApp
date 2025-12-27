import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper';

const NewsItem = ({ title, content, image, author, id,date, navigation }) => {

    const handleNewsPress = () => {
        const payload = {
            title, content, image, author, id,date
        }
        navigation.navigate("newsDetail",payload)
    }
    return (
        <TouchableOpacity onPress={handleNewsPress}>
            <Card mode='elevated' style={styles.newsCard}>
                <Card.Cover source={{ uri: image }} />
                <Card.Title title={title} />
                <Card.Content>
                    <Text variant="bodyMedium">{content}</Text>
                    <Text variant="bodyMedium">Author : {author}</Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    newsCard: {
        marginHorizontal: 5,
        marginVertical: 3,
        padding: 5
    }

})