import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../utils/colors'
import AppText from '../lists/appText'

const ErrorMessage = ({error, visible}) => {
    if (!visible || !error)   
        return null
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error: {
        color: colors.danger
    }
})
