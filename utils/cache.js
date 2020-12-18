import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

const prefix='cache'
const expiryLimit=5

const storeData = async (key, value) => {
    try {
        const item={
            value,
            timeStamp: Date.now()
        }
        await AsyncStorage.setItem(prefix+key, JSON.stringify(item))
    } catch (e) {
        console.log(e)
    }
}

const isExpired=(item)=>{
    const currentDate=moment(Date.now())
    const storedDate=moment(item.timeStamp)
    return currentDate.diff(storedDate, 'minutes') > expiryLimit;
}

const getData=async (key)=>{
    const value=await AsyncStorage.getItem(prefix+key);
    const item=JSON.parse(value)

    if(!item) return null
    
    if(isExpired(item)){
        await AsyncStorage.removeItem(prefix+key)
        return null
    }

    return item.value
}

export default{
    storeData,
    getData
}

