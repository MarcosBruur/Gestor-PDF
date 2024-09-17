import axios from 'axios';


const baseURL = 'http://localhost:8000/api/v1/users/'

export const getAllUsers = () => {
    return axios.get(baseURL)
        .then((response) => { return response.data })
        .catch((error) => { console.log(error) })
}

export const register = (user) => {
    return axios.post(baseURL + 'register/',user)
        .then((response) => { return response.data })
        .catch((error) => { console.log(error) })
}

export const login = (user) =>{
    return axios.post(baseURL + 'login/',user,{
        withCredentials: true
    })
        .then((response) =>{return response.data})
        .catch((error) =>{
            return console.error(error.message)
        })
} 

export const logout = () =>{
    return axios.get(baseURL + 'logout',{
        withCredentials: true
    })
        .then((response) => {return response.data})
        .catch((error) =>{
            return error.response.status
        })
}

export const getcookie = () =>{
    return axios.get('http://localhost:8000/api/v1/users/getcookie/', {
        withCredentials: true 
    })
        .then((response) => {return response.data})
        .catch((error) => { console.error(error.message)});
}




