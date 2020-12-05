import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'
import * as Location from 'react-native-location'

import {AppForm, AppFormField as FormField, AppSubmitButton as SubmitButton, AppFormPicker as Picker} from '../components/form'
import FormImagePicker from '../components/form/formImagePicker'
import {Screen, CategoryPickerItem} from '../components/lists'

const validationSchema=Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    image: Yup.array().min(1, "Please select atleast one image")
})

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
  

const ListingEditPage = () => {
  const [location, setLocation]=useState()
  Location.configure({ distanceFilter: 5.0 });

  const getLocation=async ()=>{
    const {granted} = await Location.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: "We need to access your location",
          message: "We use your location to show where you are on the map",
          buttonPositive: "OK",
          buttonNegative: "Cancel"
        }
      }
    })
    if(!granted) return
    const {longitude, latitude} =await Location.getLatestLocation({ timeout: 60000 })
    subscribeToLocationUpdates({longitude, latitude})
  }
  useEffect(() => {
    getLocation()
  }, [])
  
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    image: []
                }}
                onSubmit={()=>console.log(location)}
                validationSchema={validationSchema}
            >    
                <FormImagePicker name="image" />
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <Picker 
                    items={categories}
                    name="category"
                    placeholder="Category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />
                <FormField 
                    maxLength={255}
                    multiLine
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

export default ListingEditPage

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    }
})
