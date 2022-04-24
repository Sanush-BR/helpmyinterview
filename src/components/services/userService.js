import http from "../services/httpServices";
// import {apiUrl} from "/config.json";

const apiEndPoint = "http://localhost:8000/api/user";
// const apiEndPoint = `${apiUrl}/user`;

export function register(user){
    return http.post(apiEndPoint,{
        email: user.email,
        password:user.password,
        name:user.name
    });
}