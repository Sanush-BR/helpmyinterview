import http from "../services/httpServices";
// import {apiUrl} from "/config.json";

const apiEndPoint = `${process.env.url}/api/user`;
// const apiEndPoint = `${apiUrl}/user`;

export function register(user){
    return http.post(apiEndPoint,{
        email: user.email,
        password:user.password,
        name:user.name
    });
}