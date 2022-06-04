import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class LoginServices{

    loginAccount(loginDetails){
        console.log("hehe");
        return axios.post(API_BASE_URL+'/signin',loginDetails);
    }

    forgotPassword(forgotPassDetails){
        return axios.post(API_BASE_URL+'/forgotPassword',forgotPassDetails);
    }
}


export default new LoginServices();