import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'

import AppTextInput from '../appTextInput'
import ErrorMessage from './errorMessage'

const AppFormField = ({name, ...otherProps}) => {
    const { errors, setFieldTouched, setFieldValue, touched, values}=useFormikContext()
    return (
        <>
            <AppTextInput
                onChangeText={text=>setFieldValue(name, text)}
                value={values[name]}
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
