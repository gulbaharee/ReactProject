
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PostDetail from './postDetails';
import Comments from './comment';

const PostStack = createStackNavigator();

const PostScreen = ()=> {
    return(
        <PostStack.Navigator>
            <PostStack.Screen name='Post List' component={Posts}/>
            <PostStack.Screen name ='Post Detail' component={PostDetail}/>
            <PostStack.Screen name='Comments' component={Comments}/>
        </PostStack.Navigator>
       
    )
}
export default PostScreen

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
    },
    textSyle: {
        fontSize: 17,
        color: '#000000',
        fontWeight: '300',
    },
    scrollStyle: {
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
    }

})
