import React, { useEffect, useState } from "react";
import { ListItem, Card } from 'react-native-elements'
import { StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';

const Comments = ({ route, navigation }) => {
    const [comments, getCommments] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        getCommentList(id);
    }, []);

    const getCommentList = (id) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then((res) => {
                getCommments(res.data)
            })

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    comments.map((item, index) => {
                        return <>
                            <Card>
                                <ListItem>
                                    <ListItem.Content>
                                        <View key={index}>
                                            <ListItem.Title>{item.name}</ListItem.Title>
                                            <Card.Divider />
                                            <ListItem.Subtitle>{item.body}</ListItem.Subtitle>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            </Card>
                        </>
                    })
                }
            </ScrollView>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6fa",
    }
})
export default Comments