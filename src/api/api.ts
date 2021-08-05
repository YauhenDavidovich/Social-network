import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7182e7e1-cf7b-49da-8e89-52ae747000d8'
    }
})

export const api = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}

