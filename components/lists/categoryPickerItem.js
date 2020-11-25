import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from './appText'
import IconTemplate from './icon'

const CategoryPickerItem = ({item, onPress}) => {
    return (
        <View style={styles.container}>
            <IconTemplate backgroundColor={item.backgroundColor} name={item.icon} size={70} />
            <AppText style={styles.label} >{item.label}</AppText>
        </View>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label:{
        marginTop:5,
        fontSize: 16,
        textAlign: 'center'
    }
})
