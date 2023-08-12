import axios from 'axios';

const API_BASE_URL = "/api/v1";

class LoginServices {

    loginAccount(loginDetails) {
        console.log("login services");
        return axios.post(API_BASE_URL + '/signin', loginDetails);
    }

    forgotPassword(forgotPassDetails) {
        return axios.post(API_BASE_URL + '/forgotPassword', forgotPassDetails);
    }
}


export default new LoginServices();