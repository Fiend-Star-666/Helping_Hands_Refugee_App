import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class VolunteerServices {
    createService(service) {
        return axios.post(API_BASE_URL + '/volunteer/create/service', service);
    }
}
export default new VolunteerServices();