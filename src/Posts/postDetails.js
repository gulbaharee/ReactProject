
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Card } from 'react-native-elements'

const PostDetail =({route, navigation}) => {
    const [posts, getDetail] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        getPostDetails(id);

    }, []);

    const getPostDetails = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then((data) => {

                getDetail(data);

            })
    }

    return (
        <View style={styles.container}>
            {
                <Card>
                    <ListItem>
                        <ListItem.Content>
                            <View>
                                <ListItem.Title>{posts.title}</ListItem.Title>
                                <Card.Divider />
                                <ListItem.Subtitle>{posts.body}</ListItem.Subtitle>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                </Card>
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
export default PostDetail