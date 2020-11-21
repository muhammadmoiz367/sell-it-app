import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/listItem'
import ListItemDeleteAction from '../components/listItemDeleteAction'
import ListItemSeparator from '../components/listItemSeparator'
import Screen from '../components/screen'

const initialMessages=[
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        image: require('../images/profile.png')
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Description 2',
        image: require('../images/profile.png')
    },
    {
        id: 3,
        title: 'Title 3',
        description: 'Description 3',
        image: require('../images/profile.png')
    },
    {
        id: 4,
        title: 'Title 4',
        description: 'Description 4',
        image: require('../images/profile.png')
    }
]

const MessagePage = () => {
    const [messages,setMessages] = useState(initialMessages)
    const [refresh, setRefresh] = useState(false)
    
    const handleDelete=(item)=>{
        setMessages(initialMessages.filter((m)=>m.id !== item.id))
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message=> message.id.toString()}
                renderItem={({item})=> 
                <ListItem 
                    title={item.title} 
                    subTitle={item.description} 
                    image={item.image} 
                    onPress={()=> console.log('message selected', item)} 
                    rightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)} />} 
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refresh}
                onRefresh={()=>{
                    setMessages([
                        {
                            id: 1,
                            title: 'Title 1',
                            description: 'Description 1',
                            image: require('../images/profile.png')
                        },
                        {
                            id: 2,
                            title: 'Title 2',
                            description: 'Description 2',
                            image: require('../images/profile.png')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagePage

const styles = StyleSheet.create({
    
})
