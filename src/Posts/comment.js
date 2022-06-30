import React,{ useEffect, useState } from "react";
import { ListItem, Card } from 'react-native-elements'
import { StyleSheet, View, Text } from 'react-native';

const Comments = ({route,navigation})=>{
    const [comments,getCommments] = useState([]);
    const {id}=route.params;

    useEffect(()=>{
        getCommentList(id);
    },[]);

    const getCommentList = (id) =>{
        fetch('https://jsonplaceholder.typicode.com/posts/' +id + '/comments')
            .then(result =>result.json())
            .then((data)=>{
                getCommments(data);
            })
    }

    return (
        <View style={styles.container}>
            {
                <Card>
                    <ListItem>
                        <ListItem.Content>
                            <View>
                                <ListItem.Title>{comments.name}</ListItem.Title>
                                <Card.Divider />
                                <ListItem.Subtitle>{comments.body}</ListItem.Subtitle>
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
export default Comments