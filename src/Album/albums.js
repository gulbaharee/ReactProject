import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

const Album = ()=> {
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

    return (
        <View style={styles.container}>
            {
                <ScrollView >
                    {
                        albums.map((item, index) => {
                            return <>
                                <View style={styles.scrollStyle}>
                                    <Text key={index}>{item.title}</Text>
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
export default Album