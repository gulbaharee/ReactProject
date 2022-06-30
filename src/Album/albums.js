import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Photos from './photos';

const AlbumStack  =createStackNavigator();

const AlbumScreen = ()=>{
    return(
        <AlbumStack.Navigator>
            <AlbumStack.Screen name='Albums' component={Album}/>
            <AlbumStack.Screen name='Photos' component={Photos}/>
        </AlbumStack.Navigator>
    )
}
export default AlbumScreen


const Album = ({route,navigation})=> {
    const [albums,getAlbum] = useState([]);

    useEffect(()=>{
        getAlbumList();
    })

    const getAlbumList=()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((res)=>{
                getAlbum(res.data)
            })
        
    }

    const goPhoto = (id)=>{
        navigation.navigate('Photos',{id:id})
    }

    return (
        <View style={styles.container}>
            {
                <ScrollView >
                    {
                        albums.map((item, index) => {
                            return <>
                                <View style={styles.scrollStyle}>
                                    <Text style={styles.textSyle} onPress={() => { goPhoto(item.id) }} key={index}>{item.title}</Text>
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
        backgroundColor: "#e6e6fa"
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
