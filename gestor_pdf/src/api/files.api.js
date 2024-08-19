import axios from 'axios'

const baseURL = 'http://localhost:8000/users/api/v1/files'


export const addFile = (file) => {
    console.log(file)
    return axios.post(baseURL, file)
        .then((response) => response.data)
        .catch((error) => console.error(error))
}