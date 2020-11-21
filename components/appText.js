import React from 'react'
import {StyleSheet, Text } from 'react-native'

import DefaultStyles from '../utils/styles'

const AppText = ({children, style}) => {
    return (
        <Text style={[DefaultStyles.text, style]} > {children} </Text>
    )
}

export default AppText

const styles = StyleSheet.create({

})
