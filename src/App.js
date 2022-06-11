import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

import AuthService from './services/auth.service';
import SLogin from './components/securityComponents/login.component';
import Profile from './components/securityComponents/profile.component';
import BoardAdmin from './components/securityComponents/board-admin.component';
import BoardUser from './components/securityComponents/board-user.component';
import Register from './components/securityComponents/register.component';
import EventBus from './common/EventBus';
import error from './components/error';

class App extends Component{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }



  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }




  render(){

    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <Router>

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Insert Name here
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>



            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            


            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}

        

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">

            {showAdminBoard && (
            <li className="nav-item">
            <Link to={"/account/register/admin"} className="nav-link">
              Register Admin
            </Link>
            </li>
            )}


              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
 
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/account/register/member"} className="nav-link">
                  Sign Up Member
                </Link>
              </li>
            </div>
          )}

          
        </nav>

                  <div className="container">   
                      <Switch>
                        <Route exact path="/login" component={SLogin} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/user" component={BoardUser} />
                        <Route exact path="/admin" component={BoardAdmin} />
                        {
                        //above are /api/test
                        }


                          <Route  component={error} />                          
                          <Route/>  
                      </Switch>
                  </div>                
        </Router>
      </div>    

    );
}
}

export default App;

