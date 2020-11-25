import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../utils/colors'
import AppText from './appText'

const ListItem = ({onPress, title, subTitle, image, IconContainer, rightActions}) => {
    return (
        <Swipeable renderRightActions={rightActions} >
            <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
                <View style={styles.container} >
                    {IconContainer}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subText} numberOfLines={2} >{subTitle}</AppText>}
                    </View>
                    <Icon color={colors.medium} name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
        
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
        justifyContent: 'center',
        flex: 1
    }
})
