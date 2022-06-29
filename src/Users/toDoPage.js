import { FlatList } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { View, Button, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

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
    const getUsersList = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {

            getUsers(data);

        })
    }

    return (
        <ScrollView>
            {
                todo.map((item, index) => {
                    return <>
                    { users.id == todo.userId &&
                        <ListItem key={index} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>

                        </ListItem>
                    }
                        
                    </>
                })
            }
        </ScrollView>
    )

}


export default ToDoList
