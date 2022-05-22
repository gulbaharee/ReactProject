
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'

const Posts = ({ route, navigation }) => {
    const [posts, getPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data) => {

                getPosts(data);

            })

    }, []);
    const renderUsers = ({ item }) => {
        return (
            <ScrollView>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Subtitle onPress={() => { goDetail(item.id) }}>{item.title}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>

        )
    }
    const goDetail = (id) => {
        navigation.navigate('PostDetail', { id: id })
    }
    return (
        <View style={styles.container}>
            {
                <FlatList 
                    data={posts}
                    renderItem={renderUsers}
                >

                </FlatList>
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




