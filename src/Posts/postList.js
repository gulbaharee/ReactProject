
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Posts = ({ route, navigation }) => {
    const [posts, getPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data) => {

                getPosts(data);

            })

    }, []);

    const goDetail = (id) => {
        navigation.navigate('PostDetail', { id: id })
    }
    var size = 20;

    return (
        <View style={styles.container}>
            {
                <ScrollView >
                    {
                        posts.slice(0, size).map((item, index) => {
                            return <>
                                <View style={styles.scrollStyle}>
                                    <Text style={styles.textSyle} onPress={() => { goDetail(item.id) }} key={index}>{item.title}</Text>
                                </View>

                            </>
                        })
                    }

                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6fa",
        margin:10
    },
    textSyle: {
        fontSize: 17,
        color: '#000000',
        fontWeight: '300',
    },
    scrollStyle: {
        height: 60,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fffaf0',
        borderColor: '#000080',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 16,
        paddingRight: 14,
    }

})

export default Posts




