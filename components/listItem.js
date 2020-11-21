import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../utils/colors'
import AppText from './appText'

const ListItem = ({onPress, title, subTitle, image, IconContainer, rightActions}) => {
    return (
        <Swipeable renderRightActions={rightActions} >
            <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
                <View style={styles.container} >
                    {IconContainer}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} >{title}</AppText>
                        {subTitle && <AppText style={styles.subText} >{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
        
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    text:{
        fontWeight: '500',
    },
    subText:{
        color: colors.medium
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    }
})
