import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class VehicleService{

    getVehicles(){
        return axios.get(API_BASE_URL+'/vehicle/view');
    }
    
    createVehicle(vehicle) {
        return axios.post(API_BASE_URL+'/vehicle/add', vehicle);
    }

    getVehicleById(vehicleId){
        return axios.get(API_BASE_URL + '/vehicle/view/' + vehicleId);
    }

    deleteVehicle(vehicleId){
        return axios.delete(API_BASE_URL + '/vehicle/delete/' + vehicleId);
    }

    getVehicleLogByVehicleId(vehicleId){
        return axios.get(API_BASE_URL+'/logs/vehicle/view/'+vehicleId);
    }

    getParkingStallByVehicleId(vehicleId){
        return axios.get(API_BASE_URL+'/parkingstall/vehicle/view/'+vehicleId);
    }

    getCRLocationForAVehicle(vehicleID){
        return axios.get(API_BASE_URL+"/carrentallocation/vehicle/view/"+vehicleID);
    }

    getVehiclesByCRLocation(crLocationID){
        return axios.get(API_BASE_URL+"/carrentallocation/"+crLocationID+"/vehicles/");
    }

    getCRLocation(){
        return axios.get(API_BASE_URL+"/carrentallocations/view")
    }
    
    getCRSystem(){
        return axios.get(API_BASE_URL+"/home/system")
    }

    getAllAccountsViaAdmin(){
        return axios.get(API_BASE_URL+"/admin/account/view/all")
    }

    getAllPersonalInfo(accountID){
        return axios.get(API_BASE_URL+"/account/view/pinfo/"+accountID)
    }

    getVReservationPerAccount(accountID){
         return axios.get(API_BASE_URL+"/vehiclereservation/account/view/"+accountID);
        
    }

    getVReservationPerLocation(vehicleID){
        return axios.get(API_BASE_URL+"/admin/vehiclereservation/carrentallocation/view/vehicle/"+vehicleID);
    }

    getVReservationAll(){
        return axios.get(API_BASE_URL+"/admin/vehiclereservations/view/all");
    }

    createMemberAccount(account) {
        return axios.post(API_BASE_URL+'/account/register/member', account);
    }

    createCRLocation(crLocation){
        return axios.post(API_BASE_URL+"/admin/carrentallocation/add",crLocation);
    }

    viewBillViaVReservation(VRid){
        return axios.get(API_BASE_URL+"/vehiclereservation/viewbill/"+VRid);
    }

    viewBillItemViaVReservation(VRid){
        return axios.get(API_BASE_URL+"/vehiclereservation/viewbillItem/"+VRid+"/detailedview/");
    }

    createVehicleReservation(vReservation){
        return axios.post(API_BASE_URL+"/CreateVehicleReservation",vReservation)
    }

    createReceptionistAccount(account){
        return axios.post(API_BASE_URL+"/account/register/admin/",account);
    }

    getVehicleByVRId(VRid){
            return axios.get(API_BASE_URL+"/account/vehiclereservation/vehicle/"+VRid);
    }

    pickupVehicle(VRid){
        return axios.get(API_BASE_URL+"/account/vehiclereservation/vehicle/pickup/"+VRid);
    }

    createVehicleLogByVehicleId(vehicleLog){
        return axios.post(API_BASE_URL+"/vehicle/createvehiclelog/",vehicleLog);

    }
    getVehicleLogByVehicleLogId(vehicleLogId){
        return axios.get(API_BASE_URL+"/vehicleLog/byID/"+vehicleLogId);
    }
    updateVehicleLogById(vehicleLog,VehicleLogId){
        return axios.put(API_BASE_URL+"/updateVehicleLog/"+VehicleLogId,vehicleLog);
    }
}

export default new VehicleService();