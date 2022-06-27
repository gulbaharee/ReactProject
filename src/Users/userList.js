
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import UserDetail from './userDetails';


const UserStack = createStackNavigator();

const UserScreen = () =>{
    return(
        <UserStack.Navigator>
            <UserStack.Screen name ='UserList' component={Users}/>
            <UserStack.Screen name='UserDetail' component={UserDetail} />
        </UserStack.Navigator>
    )
}
export default UserScreen

const Users = ({ route, navigation }) => {
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
            <TouchableWithoutFeedback
                onPress={() => { goDetail(item.id, item.name) }}>
                <View style={styles.mainCardView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.subCardView}>
                            <Image
                                source={require('../Image/user2.png')}
                                resizeMode="contain"
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={{ marginLeft: 15 }} >
                            <Text
                                style={styles.titleText}>
                                {item.name}
                            </Text>
                            <View
                                style={ styles.substitleView}>
                                <Text
                                    style={styles.subtitleText}>
                                    {item.username}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    const goDetail = (id, name) => {
        navigation.navigate('UserDetail', { id: id, title: name })
    }
    return (
        <View style={styles.container}>
            {
                <FlatList
                    data={users}
                    renderItem={renderUsers}
                    ListHeaderComponent={
                        <View style={{ width: '100%', height: 20 }} />
                    }
                    ListFooterComponent={
                        <View style={{ width: '100%', height: 20 }} />
                    }
                >

                </FlatList>
            }
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6fa',
    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffaf0',
        borderRadius: 15,
        shadowColor: '#c0c0c0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#ffe4e1',
        borderColor: '#000080',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    titleText: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    subtitleText: {
        color: '#000000',
        fontSize: 12,
    },
    substitleView: {
        marginTop: 4,
        borderWidth: 0,
        width: '85%',
    }
});






