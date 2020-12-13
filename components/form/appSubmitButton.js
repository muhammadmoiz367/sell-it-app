import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'

import AppButton from '../buttons'

const AppSubmitButton = ({title}) => {
    const {handleSubmit} = useFormikContext();
    return (
        <AppButton text={title} onPress={handleSubmit} />
    )
}

export default AppSubmitButton

const styles = StyleSheet.create({})
