import axios from "../axios/axios";

const getAllDevice = () => {
    return axios.get('/devices')
}

export {getAllDevice}