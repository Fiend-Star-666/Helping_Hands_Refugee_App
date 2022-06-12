import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class RefugeeServices {
    createTask(task) {
        return axios.post(API_BASE_URL + '/refugee/create/task', task);
    }
}

export default new RefugeeServices();