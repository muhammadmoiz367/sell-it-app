import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../utils/colors';

const AppImagePicker = ({imageUri, onChangeImage}) => {
    const handleImageUpload=()=>{
        const options={
            noData: true,
            mediaType: 'photo',
            quality: 0.5
        }
        ImagePicker.launchImageLibrary(options, response=> {
            console.log(response);
            if(response.uri){
                onChangeImage(response.uri)
            }
        })
    }
    const handlePress=()=>{
        if (!imageUri)
            handleImageUpload();
        else
            Alert.alert("Delete", "Are you sure you want to delete this image", [
                {text: 'Yes', onPress: ()=>onChangeImage(null)},
                {text: 'No'}
            ])
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri
                    ? <Icon name="camera" size={40} color={colors.medium} />
                    : <Image source={{uri: imageUri}} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AppImagePicker

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        overflow: 'hidden',
        width: 100, 
        height: 100
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
