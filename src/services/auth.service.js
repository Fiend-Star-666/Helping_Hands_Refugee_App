import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

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
/*
  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }
*/
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
