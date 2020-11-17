import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../utils/colors'

const AppButton = ({text, onPress, color="primary"}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    }
})
