import axios from 'axios'

export const productfetched =async()=>{
   const respones = axios.get('https://fakestoreapi.com/products')
    return  respones;
}

export const crudgetlist = async()=>{
    const respones = axios.get('http://localhost:3000/create')
    return respones;
}

export const crudgetbyid = async(id)=>{
    const respones = axios.get('https://fakestoreapi.com/products',id)
    return respones;
}
export const crudpost = async(data)=>{
    const respones = axios.post('https://fakestoreapi.com/products',data)
    return respones;
}

export const crudput = async(id,data)=>{
    const respones = axios.post('https://fakestoreapi.com/products',id,data)
    return respones;
}