import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import colors from '../utils/colors'

const UploadPage = ({progress=0, visible=false, onDone}) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 
                    ? (<Progress.Bar progress={progress} color={colors.primary} width={200} />)
                    : (<LottieView source={require('../assets/animations/done.json')} autoPlay loop={false} style={styles.animation} onAnimationFinish={onDone} />)
                }
                
            </View>
        </Modal>
    )
}

export default UploadPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    animation: {
        width: 250,
        height: 250
    }
})
