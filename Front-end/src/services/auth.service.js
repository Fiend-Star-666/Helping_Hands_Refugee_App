import axios from "axios";

const API_URL = "/api/v1";

class AuthService {
  async login(userDetails) {
    const response = await axios
      .post(API_URL + "/signin", userDetails);
      console.log("response.data.token:")
      console.log(response.data.token);
 
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("response.data in auth service")
      console.log(response.data);
    }
    console.log(response);
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    console.log("getCurrentUser", localStorage.getItem("user"));
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
