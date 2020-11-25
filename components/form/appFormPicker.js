import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'

import AppPicker from '../lists/appPicker'
import ErrorMessage from './errorMessage'

const appFormPicker = ({items , name, placeholder, PickerItemComponent, numberOfColumns}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    return (
        <>
            <AppPicker 
                items={items}
                placeholder={placeholder}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item)=>setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                selectedCategory={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default appFormPicker

const styles = StyleSheet.create({})