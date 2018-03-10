import axios from "axios/index";

export const sayHelloWorld = () => {
    return axios.get("http://localhost:8080/hello");
};