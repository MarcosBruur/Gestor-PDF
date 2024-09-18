import axios from 'axios'

const baseURL = 'http://localhost:8000/api/v1/files/upload/'


export const addFile = (formData) => {
    return axios.post(baseURL, formData)
        .then((response) => {return response.data})
        .catch((error) => console.error(error))
}