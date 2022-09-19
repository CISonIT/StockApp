import axios from 'axios';

const TOKEN = "cck2keaad3i2ngrq310gcck2keaad3i2ngrq3110";

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})