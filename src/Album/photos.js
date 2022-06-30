import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView,View } from 'react-native';
import { ListItem, Card } from 'react-native-elements'


const Photos = ({ route, navigation }) => {
    const [photo, getPhotos] = useState([]);
    const { id } = route.params;
    const [albums, getAlbum] = useState([]);
    

    useEffect(() => {
        getPhotoList();
    }, []);

    const getPhotoList = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                getPhotos(res.data)
            })
    }
    const getAlbumList = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((res) => {
                getAlbum(res.data)
            })
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    photo.map((item, index) => {
                        return <>
                            { id == photo.albumId &&
                                <View>
                                    <Image source={{
                                    uri:item.thumbnailUrl
                                }}/>
                                </View>
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
    }
})
export default Photos;