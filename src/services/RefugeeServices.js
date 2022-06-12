import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export default new class RefugeeServices {
    createTask(task) {
        return axios.post(API_BASE_URL + '/refugee/create/task', task);
    }
}