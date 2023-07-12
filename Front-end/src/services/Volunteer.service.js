import axios from 'axios';

const API_BASE_URL = "http://localhost:9091/api/v1";

class VolunteerServices {
    createService(service) {
        return axios.post(API_BASE_URL + '/volunteer/create/service', service);
    }

    viewAllServices(){
        return axios.get(API_BASE_URL + '/volunteer/service/viewall');
    }

    viewServicesViaAccountId(accountId){
        return axios.get(API_BASE_URL + '/volunteer/service/view/' + accountId);
    }

}
export default new VolunteerServices();