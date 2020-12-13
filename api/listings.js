import client from './client'

const endpoint='/listings';

const getListings=()=>client.get(endpoint)

const addListing=(listing, cb)=>{
    const data= new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);
    listing.image.forEach((image, index)=>{
        data.append('images', {
            name: 'image'+index,
            type: 'image/jpg' || 'image/jpeg',
            uri: image
        })
    })
    
    return client.post(endpoint, data, {
        onUploadProgress: (progress) => {
            cb(progress.loaded / progress.total)
        }
    })
}

export default{
    getListings,
    addListing
}