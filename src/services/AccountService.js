import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class AccountServices{
    createRefugee(refugee){
        return axios.post(API_BASE_URL+'/account/create/refugee',refugee);
    }

    createAdmin(admin){
        return axios.post(API_BASE_URL+'/account/create/admin',admin);
    }
    
    createVolunteer(volunteer){
        return axios.post(API_BASE_URL+'/account/create/volunteer',volunteer);
    }
}
export default new AccountServices();