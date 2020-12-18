import jwtDecode from 'jwt-decode';
import SInfo from 'react-native-sensitive-info';

const key='authToken'

const storeToken=async (token)=>{
    try {
        await SInfo.setItem(key, token, {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        });

    } catch (error) {
        console.log(`Error storing auth token, ${error}`)
    }
}

const getToken=async ()=>{
    try {
        const token =  await SInfo.getItem(key, {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        });
        return token
    } catch (error) {
        console.log(`Error getting auth token, ${error}`)
    }
}

const getUser=async ()=>{
    const token=await getToken();
    return token ? jwtDecode(token) : null
}

const removeToken=async ()=>{
    try {
        return SInfo.deleteItem(key, {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        });
    } catch (error) {
        console.log(`Error removing auth token, ${error}`)
    }
}

export default {
    getUser,
    storeToken,
    getToken, 
    removeToken
}