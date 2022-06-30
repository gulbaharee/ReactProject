
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements'

const PostDetail =({route, navigation}) => {
    const [posts, getDetail] = useState([]);
    const [comments,getCommments] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        getPostDetails(id);
        getCommentList(id);
    }, []);

    const getPostDetails = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then((data) => {

                getDetail(data);

            })
    }
    const getCommentList = (id) =>{
        fetch('https://jsonplaceholder.typicode.com/posts/' +id + '/comments')
        .then(res =>res.json())
        .then((data)=>{
            getCommments(data);
        })
    }
    const goComments = (id) => {
        navigation.navigate('Comments', { id: id })
    }
    return (
        <View style={styles.container}>
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
                <Card>
                    <ListItem>
                        <ListItem.Content>
                            <Text onPress={() => { goComments(posts.id)}}>Comments</Text>
                        </ListItem.Content>
                    </ListItem>
                </Card>
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