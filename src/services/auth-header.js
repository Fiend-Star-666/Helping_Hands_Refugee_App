export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  console.log(localStorage.getItem('user'));
  if (user && user.token) {
    console.log("auth header")
    console.log(user.token);
     return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
  } else {
    return {};
  }
}
