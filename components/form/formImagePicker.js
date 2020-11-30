import React from 'react'
import {useFormikContext} from 'formik'

import ErrorMessage from './errorMessage'
import ImagePickerList from './imagePickerList'

const FormImagePicker = ({name}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    const imageUris=values[name]

    const handleAdd=(uri)=>{
        setFieldValue(name, [...imageUris, uri])
      }
      const handleRemove=(uri)=>{
        setFieldValue(name, imageUris.filter(imageUri=>imageUri !== uri))
      }
    return (
        <>
            <ImagePickerList imageUris={imageUris} onAdd={handleAdd} onRemove={handleRemove} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormImagePicker


