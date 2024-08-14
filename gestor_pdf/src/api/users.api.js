import axios from 'axios';


const baseURL = 'http://localhost:8000/users/api/v1/users/'

export const getAllUsers = () => {
    return axios.get(baseURL)
        .then((response) => { return response.data })
        .catch((error) => { console.log(error) })
}

export const addUser = (user) => {

    return axios.post(baseURL, user)
        .then((response) => { return response.data })
        .catch((error) => { console.log(error) })
}