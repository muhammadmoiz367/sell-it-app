import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import {ListItem, ListItemSeparator} from '../components/lists'
import IconTemplate from '../components/icon'
import Screen from '../components/screen'
import colors from '../utils/colors'

const menuItems=[
    {
        title: 'My listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]

const AccountScreen = ({navigation}) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Muhammad Moiz" subTitle="muhammadmoiz367@gmail.com" image={require('../assets/images/profile.png')} />
            </View>
            <View  style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem=> menuItem.title}
                    renderItem={({item})=>
                        <ListItem
                            title={item.title}
                            IconContainer={<IconTemplate name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            onPress={()=>navigation.navigate(item.targetScreen)}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem title="Logout" IconContainer={<IconTemplate name="logout" backgroundColor="#ffe66d" />} />
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})
