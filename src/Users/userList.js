
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'

const Users = ({ route,navigation }) => {
    const [users, getUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {

                getUsers(data);

            })

    }, []);
    const renderUsers = ({ item }) => {
        return (
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title onPress={() => { goDetail(item.id,item.name) }}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.username}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }
    const goDetail = (id,name) => {
        navigation.navigate('UserDetail', { id: id,title:name  })
    }
    return (
        <View style={styles.container}>
            {
                <FlatList
                    data={users}
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

export default Users




