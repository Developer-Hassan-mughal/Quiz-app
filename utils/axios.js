import axios from "axios";


const instance = axios.create({
    baseURL: `https://opentdb.com/`,
    // withCredentials: true
})

export default instance