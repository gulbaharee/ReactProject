
import React from 'react'
import {  StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

const Main = ({ navigation }) => {

    

    const goUserPage = () => {
        navigation.navigate('Users')
    }

    const goPostPage = () => {
        navigation.navigate('Posts')
    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => goUserPage()}>
                    <View style={styles.userBtn}>
                        <Text style={styles.textStyle}>USERS</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => goPostPage()}>
                    <View style={styles.postBtn}>
                        <Text style={styles.textStyle}>POSTS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: "#e6e6fa",
    },
    userBtn: {
        backgroundColor: "#fafad2",
        borderRadius: 15,
        width: 260,
        height: 60,
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 58,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    postBtn: {
        backgroundColor: "#fff0f5",
        borderRadius: 15,
        width: 260,
        height: 60,
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 58,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    textStyle: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        textAlign: 'center'

    }
});
export default Main