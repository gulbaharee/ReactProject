
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'
import { Card } from 'react-native-elements/dist/card/Card';

const UserDetail = ({ route, navigation }) => {
    const [users, getDetail] = useState([]);
    //const { id } = route.params;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users' + id)
            .then(res => res.json())
            .then((users) => {

                getDetail(users);

            })
    }, []);

   

    const renderUsers = ({ item }) => {
        return (
            <ListItem.Content>
                <View>
                    <ListItem.Title style={styles.textStyle}>{item.email}</ListItem.Title>
                    <ListItem.Subtitle>{item.username}</ListItem.Subtitle>
                </View>
            </ListItem.Content>
        )
    }
    return (
        <View style={styles.container}>
            {
                <Card
                    data={users}
                    renderItem={renderUsers}
                >

                </Card>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6fa",
    }, textStyle: {
        color: "Black",
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'

    }
})

export default UserDetail




