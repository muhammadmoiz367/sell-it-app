import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AppImagePicker from './imagePicker'

const ImagePickerList = ({imageUris=[], onAdd, onRemove}) => {
    const scrollView=useRef();
    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={()=>scrollView.current.scrollToEnd()} >
                <View style={styles.container}>
                    {imageUris.map((uri)=>(
                        <View style={styles.subContainer} key={uri}>
                            <AppImagePicker imageUri={uri} onChangeImage={()=>onRemove(uri)} />
                        </View>
                    ))}
                    <AppImagePicker onChangeImage={(uri)=>onAdd(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ImagePickerList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    subContainer: {
        marginRight: 10
    }
})
