import axios from "axios";

export const api = axios.create({
    baseURL: 'http://http://localhost:3000/api',
})