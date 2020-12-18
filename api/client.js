import { create } from 'apisauce'
import cache from '../utils/cache'
import AuthStorage from '../auth/storage'

const apiClient=create({
    baseURL: 'http://192.168.43.254:9000/api'
})

apiClient.addAsyncRequestTransform(async (request)=>{
    const authToken=await AuthStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"]=authToken;
})

const get=apiClient.get;
apiClient.get=async (url, params, axiosConfig)=>{
    const response=await get(url, params, axiosConfig);

    if(response.ok){
        cache.storeData(url, response.data)
        return response
    }

    const data=await cache.getData(url);
    return data ? {ok: true, data} : response
}

export default apiClient