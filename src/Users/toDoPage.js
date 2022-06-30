import { FlatList } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

const ToDoList = ({ route, navigation }) => {
    const [todo, getToDo] = useState([]);
    const { id } = route.params;
    const [users, getUsers] = useState([]);

    useEffect(() => {
        getToDoList(id);
        getUsersList();
    }, []);

    const getToDoList = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data) => {

                getToDo(data);

            })
    }
    const getUsersList = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {

                getUsers(data);

            })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    todo.map((item, index) => {
                        return <>
                            {users.id == todo.userId &&
                                <Card key={index}>
                                    <Text>{item.title}</Text>
                                </Card>

                            }
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
    },
    titleStyle: {
        fontWeight: 'bold'
    }
})
export default ToDoList
