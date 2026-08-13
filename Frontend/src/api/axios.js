import axios from "axios";

const api = axios.create({
    baseURL:"https://taskora-brown-ten.vercel.app/",
    withCredentials:true
});

export default api;