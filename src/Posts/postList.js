
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'
import AnimatedFlatList from "react-native-flatlist-animated";

const Posts = ({ route, navigation }) => {

    const [posts, getPosts] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data) => {

                getPosts(data);

            })

    }, []);
    const renderPosts = ({ item }) => {
        return (
            <Text onPress={() => { goDetail(item.id) }}>{item.title}</Text>
        )
    }
    const goDetail = (id) => {
        navigation.navigate('PostDetail', { id: id })
    }
    
    return (
        <View style={styles.container}>
            {
                <AnimatedFlatList
                data={posts}
                style={{ width: "100%" }}
                itemContainerHeight={50}
                renderItem={renderPosts}
              />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6fa",
    }
    
})
export default Posts