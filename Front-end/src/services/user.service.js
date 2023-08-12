import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/test';

class UserService {
    getPublicContent() {

        return axios.get(API_URL + '/all');
    }

    getUserBoard() {

        console.log("user service get user board");
        console.log(authHeader());
        return axios.get(API_URL + '/user', {headers: authHeader()});
    }

    getAdminBoard() {
        console.log("user Admin get Admin board");
        console.log(authHeader());
        return axios.get(API_URL + '/admin', {headers: authHeader()});
    }

    getVolunteerBoard() {
        console.log("user Volunteer get Volunteer board");
        console.log(authHeader());
        return axios.get(API_URL + '/volunteer', {headers: authHeader()});
    }

    getRefugeeBoard() {
        console.log("Refugee service get Refugee board");
        console.log(authHeader());
        return axios.get(API_URL + '/refugee', {headers: authHeader()});
    }

}

export default new UserService();


/*

basic crud
    updateVehicleLogById(vehicleLog,VehicleLogId){
        return axios.put(API_BASE_URL+"/updateVehicleLog/"+VehicleLogId,vehicleLog);
    }


        createVehicleLogByVehicleId(vehicleLog){
        return axios.post(API_BASE_URL+"/vehicle/createvehiclelog/",vehicleLog);

    }


    deleteVehicle(vehicleId){
        return axios.delete(API_BASE_URL + '/vehicle/delete/' + vehicleId);
    }
*/