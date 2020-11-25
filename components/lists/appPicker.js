import React, { Fragment, useState } from 'react'
import { Button, Modal, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../utils/colors'
import DefaultStyles from '../../utils/styles'
import AppText from './appText'


// const categories=[
//     {
//       label: 'Clothing',
//       value: 1
//     },
//     {
//       label: 'Furniture',
//       value: 2
//     },
//     {
//       label: 'Cars',
//       value: 3
//     }
//   ]
  

const AppTextPicker = ({name, placeholder, items, selectedCategory, onSelectItem, PickerItemComponent=PickerItem, numberOfColumns=1}) => {
    const [modalVisibility, setModalVisibility]=useState(false);
    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={()=>setModalVisibility(true)} >
                <View style={styles.container}>
                    {name && <Icon name={name} size={20} color={DefaultStyles.colors.medium} style={styles.icon} />}
                    {selectedCategory 
                        ? (<AppText style={styles.text}>{selectedCategory.label}</AppText>)
                        : (<AppText style={styles.placeholder}>{placeholder}</AppText>)
                    }
                    <Icon name="chevron-down" size={20} color={DefaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisibility} animationType="slide" >
                <FlatList 
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item=>item.value.toString()}
                    renderItem={({item})=> 
                        <PickerItemComponent
                            item={item}
                            label={item.label} 
                            onPress={()=>{
                                setModalVisibility(false)
                                onSelectItem(item)
                            }} 
                        />}
                />
                <Button color={colors.medium} onPress={()=>setModalVisibility(false)} title="close" />
            </Modal>
        </Fragment>
    )
}

const PickerItem=({item, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.pickerText}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

export default AppTextPicker

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
        marginTop: 3
    },
    placeholder: {
        color: DefaultStyles.colors.medium,
        flex: 1
    },
    text:{
        flex: 1
    },
    pickerText:{
        padding: 15
    }    
})
