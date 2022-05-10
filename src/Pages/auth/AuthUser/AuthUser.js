import axios from "axios"


export const AuthUser = () => {
    const http = axios.create({
        baseURL : "https://base.sagacitiai.com/base/public/api/register",
        headers: {
            'content-type' : 'application/json'
        }
    });
    return{
        http
    }
}