import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Card, Divider, Text } from 'react-native-paper';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NewsDetail = ({ route, navigation }) => {
    const { title, content, image, author, id, date } = route.params;

    return (
        <SafeAreaProvider>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: image }} style={styles.coverImage} />
                <View style={styles.container}>
                    <Text style={styles.metaText}>
                        {new Date(date).toLocaleDateString()}
                    </Text>
                    <Text style={styles.headline}>{title}</Text>
                    <View style={styles.authorRow}>
                        <MaterialCommunityIcons name="account-circle" size={26} />
                        <Text style={styles.authorText}> {author}</Text>
                    </View>
                    <Text style={styles.contentText}>{content}</Text>
                     <Divider />
                    <View style={styles.actionRow}>
                        <Button icon="heart-outline" mode="text">Like</Button>
                        <Button icon="share-outline" mode="text">Share</Button>
                        <Button icon="bookmark-outline" mode="text">Save</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
};


export default NewsDetail

const styles = StyleSheet.create({
    coverImage: {
        height: 260,
        width: "100%",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    container: {
        padding: 16,
        marginTop: -10,
    },
    metaText: {
        fontSize: 12,
        opacity: 0.6,
        marginBottom: 6,
        letterSpacing: 0.5,
    },
    headline: {
        fontSize: 26,
        fontWeight: "800",
        lineHeight: 34,
        marginBottom: 10,
    },
    authorRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },
    authorText: {
        fontSize: 15,
        fontWeight: "600",
    },
    contentText: {
        fontSize: 16,
        lineHeight: 26,
        opacity: 0.9,
        textAlign: "justify",
        marginBottom:10
    },
    divider: {
        height: 1,
        marginVertical: 20,
        opacity: 0.2,
    },
    actionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
