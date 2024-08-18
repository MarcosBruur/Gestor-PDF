import axios from 'axios'

const baseURL = 'http://localhost:8000/api/v1/files/'


export const uploadFile = (file) => {
    return axios.post(baseURL, file)
        .then((response) => response.data)
        .catch((error) => console.error(error))
}