
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Card } from 'react-native-elements'

const UserDetail = ({ route, navigation }) => {
    const [users, getDetail] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        getUserDetails(id);

    }, []);

    const getUserDetails = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
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
                                <ListItem.Title>{users.name}</ListItem.Title>
                                <Card.Divider />
                                <ListItem.Subtitle style={styles.subtitleStyle}>Username : {users.username}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitleStyle}>Email : {users.email}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitleStyle}>Phone : {users.phone}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitleStyle}>Web Site : {users.website}</ListItem.Subtitle>
                                {/* <ListItem.Subtitle style={styles.subtitleStyle}> Address : {users.address.city}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.subtitleStyle}> Company : {users.company.name}</ListItem.Subtitle> */}
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
    },
    subtitleStyle: {
        marginVertical: 5,
        fontWeight: '200'
    },
    titleStyle:{
        fontWeight: 'bold'
    }
})

export default UserDetail




