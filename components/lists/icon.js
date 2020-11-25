import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const IconTemplate = ({name, size=40, backgroundColor="#000", iconColor="#fff"}) => {
    return (
        <View 
            style={{ 
                width: size, 
                height: size, 
                borderRadius: size/2, 
                backgroundColor, 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Icon
                name={name}
                size={size*0.5}
                color={iconColor}
            />
        </View>
    )
}

export default IconTemplate

const styles = StyleSheet.create({

})
