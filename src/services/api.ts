import axios from "axios";

const Api = axios.create({
    baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
    timeout: 1000,
})

export default Api;