import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import DefaultStyles from '../utils/styles'

const AppTextInput = ({icon, ...otherProps}) => {
    return (
        <View style={styles.container}>
            {icon && <Icon name={icon} size={20} color={DefaultStyles.colors.medium} style={styles.icon} />}
            <TextInput placeholderTextColor={DefaultStyles.colors.medium} style={DefaultStyles.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        marginTop: 13
    }
    
})
