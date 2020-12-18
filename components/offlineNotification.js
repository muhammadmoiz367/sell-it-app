import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'

import colors from '../utils/colors'

const OfflineNotification = () => {
    const netInfo=useNetInfo();
    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable===false)
        return (
            <View style={styles.container}>
                <Text style={styles.text} >No internet connection!</Text>
            </View>
        )
    return null
}

export default OfflineNotification

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        zIndex: 1
    },
    text:{
        color: colors.white
    }
})
