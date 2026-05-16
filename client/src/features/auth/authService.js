import axios from 'axios'

const API_URL = "http://localhost:5000"

const register = async (formData) => {
    const response = await axios.post(
        `http://localhost:5000/api/auth/register`,
        formData
    )

    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('token', response.data.token)

    return response.data
}

const login = async (formData) => {
    const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        formData
    )

    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('token', response.data.token)

    return response.data
}

const authService = {
    register,
    login
}

export default authService