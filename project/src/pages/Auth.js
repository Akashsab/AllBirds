import axios from 'axios';


const API_URL='http://localhost:7000/';
 export const register=async(username,password)=>{
    const data =JSON.stringify({username,password})

    try{
        await axios.post(`${API_URL}register`,{username,password})

    } catch(err){
        console.error('error during login:',err.response ? err.response.data : err.message);
        throw  new Error('registration failed')

    }
 }

 export const login=async(username,password)=>{
    try{
        const response= await axios.post(`${API_URL}login`,{username,password})
        const token= response.data.token;
        localStorage.setItem('token',token);
        return token;

    }catch(err){
        console.error('error during login: ', err.response ? err.response.data : err.message);
        throw new Error('login failed');
    }

 }